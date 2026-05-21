# CODEX MEGA PROMPT — Custom CMS Build
# ================================================================
# IMPORTANT: Read every section fully before writing a single line
# of code. The instructions are ordered — do not skip ahead.
# ================================================================


## CONTEXT

You are working inside an existing React + Vite website. The project
already has:
- A landing page with a case studies section (hardcoded, DO NOT TOUCH)
- A dedicated case studies listing page (hardcoded, DO NOT TOUCH)
- Individual hardcoded case study pages (DO NOT TOUCH)
- An existing design system with components, colors, and typography
  already defined in the project

Your job is to ADD a full content management system on top of this
existing site WITHOUT modifying any existing pages, components, or
routes. You are extending the site, not rebuilding it.


## WHAT YOU ARE BUILDING

### 1. Backend — Express API (`/backend` folder)
A Node.js/Express REST API that handles:
- Authentication validation (Supabase JWT)
- CRUD for blog posts
- CRUD for CMS-managed case studies
- Media/image uploads to Supabase Storage
- User management (invite, role change)
- Analytics proxy (Plausible API)

### 2. Admin Dashboard — Protected routes under `/admin`
A CMS admin panel built as protected routes inside the existing
React + Vite project. Editors and admins log in at `/admin/login`
and manage content from `/admin/dashboard`.

### 3. Dynamic Public Pages — New routes on the main site
- `/blog` — listing page showing all published blog posts
- `/blog/:slug` — individual blog post page (uses existing design language)
- `/case-studies/:slug` — individual page for CMS-created case studies
  (mirrors the design of the existing hardcoded case study pages)

### 4. Landing Page Integration — Case studies section only
The landing page has an existing hardcoded case studies section.
BELOW or AFTER the existing hardcoded case studies, dynamically
fetch and render the latest 3 published CMS case studies from the
API. Match the exact design and layout of the hardcoded ones above.
Do not remove or modify the hardcoded entries.

### 5. Case Studies Listing Page Integration
The existing case studies listing page shows hardcoded entries.
BELOW those existing hardcoded entries, fetch and append published
CMS case studies from the API. Match the existing card/item design
exactly. Do not remove or modify the hardcoded entries.


## TECH STACK

- Frontend: React + Vite (already set up — do not change vite.config.js
  or index.html unless adding a route)
- Routing: React Router v6 (already installed)
- Styling: Match the existing project's styling approach exactly
  (Tailwind, CSS modules, or plain CSS — detect what's already in use
  and continue with that. DO NOT introduce a new styling system.)
- Backend: Node.js + Express (create in `/backend` folder)
- Database + Auth + Storage: Supabase
- Rich text editor: Tiptap (@tiptap/react, @tiptap/starter-kit,
  @tiptap/extension-image, @tiptap/extension-link,
  @tiptap/extension-placeholder)
- HTTP client: native fetch (no axios)


## DATABASE

Use this exact Supabase schema — run it as-is, do not modify table
names or column names:

```sql
-- PROFILES
create table public.profiles (
  id          uuid references auth.users(id) on delete cascade primary key,
  full_name   text,
  avatar_url  text,
  role        text not null default 'viewer' check (role in ('admin', 'editor', 'viewer')),
  created_at  timestamptz default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- CATEGORIES
create table public.categories (
  id         uuid primary key default gen_random_uuid(),
  name       text not null unique,
  slug       text not null unique,
  created_at timestamptz default now()
);

-- BLOG POSTS
create table public.posts (
  id               uuid primary key default gen_random_uuid(),
  title            text not null,
  slug             text not null unique,
  excerpt          text,
  body             text,
  cover_image_url  text,
  status           text not null default 'draft'
                   check (status in ('draft', 'published', 'archived')),
  author_id        uuid references public.profiles(id) on delete set null,
  category_id      uuid references public.categories(id) on delete set null,
  meta_title       text,
  meta_description text,
  og_image_url     text,
  canonical_url    text,
  published_at     timestamptz,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- CMS CASE STUDIES
create table public.case_studies (
  id               uuid primary key default gen_random_uuid(),
  title            text not null,
  slug             text not null unique,
  client_name      text,
  industry         text,
  excerpt          text,
  body             text,
  cover_image_url  text,
  results          jsonb,
  status           text not null default 'draft'
                   check (status in ('draft', 'published', 'archived')),
  author_id        uuid references public.profiles(id) on delete set null,
  meta_title       text,
  meta_description text,
  og_image_url     text,
  published_at     timestamptz,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- MEDIA
create table public.media (
  id          uuid primary key default gen_random_uuid(),
  file_name   text not null,
  file_url    text not null,
  file_type   text,
  file_size   int,
  alt_text    text,
  uploaded_by uuid references public.profiles(id) on delete set null,
  created_at  timestamptz default now()
);

-- AUTO-UPDATE updated_at
create or replace function update_updated_at()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger posts_updated_at
  before update on public.posts
  for each row execute procedure update_updated_at();

create trigger case_studies_updated_at
  before update on public.case_studies
  for each row execute procedure update_updated_at();

-- RLS
alter table public.profiles     enable row level security;
alter table public.posts        enable row level security;
alter table public.case_studies enable row level security;
alter table public.categories   enable row level security;
alter table public.media        enable row level security;

create or replace function get_my_role()
returns text as $$
  select role from public.profiles where id = auth.uid();
$$ language sql security definer;

create policy "Users can view all profiles"
  on public.profiles for select using (true);
create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);
create policy "Admins can update any profile"
  on public.profiles for update using (get_my_role() = 'admin');

create policy "Published posts are public"
  on public.posts for select
  using (status = 'published' or auth.uid() is not null);
create policy "Editors and admins can insert posts"
  on public.posts for insert
  with check (get_my_role() in ('admin', 'editor'));
create policy "Authors can update their own posts"
  on public.posts for update
  using (author_id = auth.uid() or get_my_role() = 'admin');
create policy "Only admins can delete posts"
  on public.posts for delete using (get_my_role() = 'admin');

create policy "Published case studies are public"
  on public.case_studies for select
  using (status = 'published' or auth.uid() is not null);
create policy "Editors and admins can insert case studies"
  on public.case_studies for insert
  with check (get_my_role() in ('admin', 'editor'));
create policy "Authors can update their own case studies"
  on public.case_studies for update
  using (author_id = auth.uid() or get_my_role() = 'admin');
create policy "Only admins can delete case studies"
  on public.case_studies for delete using (get_my_role() = 'admin');

create policy "Anyone can view categories"
  on public.categories for select using (true);
create policy "Only admins can manage categories"
  on public.categories for all using (get_my_role() = 'admin');

create policy "Authenticated users can view media"
  on public.media for select using (auth.uid() is not null);
create policy "Editors and admins can upload media"
  on public.media for insert
  with check (get_my_role() in ('admin', 'editor'));
create policy "Only admins can delete media"
  on public.media for delete using (get_my_role() = 'admin');
```


## BACKEND — BUILD INSTRUCTIONS

Create a `/backend` folder at the project root with this structure:

```
backend/
├── index.js
├── package.json          (type: module, ES imports)
├── middleware/
│   └── auth.js
└── routes/
    ├── posts.js
    ├── caseStudies.js
    ├── media.js
    ├── users.js
    └── analytics.js
```

### backend/middleware/auth.js
- Import `@supabase/supabase-js` and create a client using
  `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from env
- Export `authenticate(req, res, next)`:
  - Read `Authorization: Bearer <token>` header
  - Call `supabase.auth.getUser(token)` to verify
  - Fetch the user's row from `public.profiles` to get their `role`
  - Attach `{ id, email, role, full_name }` to `req.user`
  - Return 401 if token missing or invalid
- Export `requireRole(...roles)` — returns middleware that checks
  `req.user.role` is in the allowed list, returns 403 if not
- Export `requireAdmin` = `requireRole('admin')`
- Export `requireEditor` = `requireRole('admin', 'editor')`

### backend/routes/posts.js
- `GET /api/posts` — list posts with pagination (?page, ?limit, ?status)
  - Editors only see their own posts; admins see all
  - Join author (profiles.full_name) and category (categories.name)
- `GET /api/posts/:id` — single post with full body
- `POST /api/posts` — create (requireEditor)
  - Auto-generate slug from title using slugify
  - Set `published_at` if status is 'published'
- `PATCH /api/posts/:id` — update (requireEditor)
  - Only admins can set status to 'published'
- `DELETE /api/posts/:id` — delete (requireAdmin)

### backend/routes/caseStudies.js
- Mirror the posts routes exactly but for `case_studies` table
- Extra fields: `client_name`, `industry`, `results` (jsonb array)

### backend/routes/media.js
- `GET /api/media` — paginated list of uploaded files
- `POST /api/media` — upload using multer (memory storage, 10MB limit,
  images only). Push buffer to Supabase Storage bucket `media` under
  path `uploads/<timestamp>-<random><ext>`. Save record to media table.
  Return the public URL.
- `PATCH /api/media/:id` — update alt_text only
- `DELETE /api/media/:id` — delete from storage and media table (requireAdmin)

### backend/routes/users.js
- `GET /api/users` — list all profiles (requireAdmin)
- `GET /api/users/me` — current user profile
- `POST /api/users/invite` — invite by email (requireAdmin)
  Uses `supabase.auth.admin.inviteUserByEmail`
- `PATCH /api/users/:id/role` — change role (requireAdmin)
  Prevent user from changing their own role.
- `DELETE /api/users/:id` — delete user (requireAdmin)

### backend/routes/analytics.js
- Proxy to Plausible Analytics API (https://plausible.io/api/v1)
- Use `PLAUSIBLE_API_KEY` and `PLAUSIBLE_SITE_ID` from env
- `GET /api/analytics/summary?period=30d` — visitors, pageviews,
  bounce_rate, visit_duration
- `GET /api/analytics/timeseries?period=30d` — daily visitors + pageviews
- `GET /api/analytics/pages?period=30d` — top pages breakdown
- `GET /api/analytics/sources?period=30d` — traffic sources breakdown
- All analytics routes require `authenticate` (any logged-in user)

### backend/index.js
```js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json({ limit: '10mb' }))

// mount all routes
app.get('/api/health', (req, res) => res.json({ ok: true }))

app.listen(process.env.PORT || 4000)
```

### backend/.env (create this file, do not commit)
```
PORT=4000
CLIENT_URL=http://localhost:5173
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
PLAUSIBLE_API_KEY=
PLAUSIBLE_SITE_ID=
```

### backend/package.json
```json
{
  "type": "module",
  "dependencies": {
    "@supabase/supabase-js": "^2",
    "cors": "^2",
    "dotenv": "^16",
    "express": "^4",
    "multer": "^1",
    "slugify": "^1"
  }
}
```


## FRONTEND — AUTH & API LAYER

### src/context/AuthContext.jsx
Create this file (do not modify any existing context files):
- Initialize Supabase client with `VITE_SUPABASE_URL` and
  `VITE_SUPABASE_ANON_KEY`
- On mount, get current session via `supabase.auth.getSession()`
- Listen for auth state changes via `supabase.auth.onAuthStateChange`
- After getting a user, fetch their profile from `public.profiles`
  to get their role
- Expose: `{ user, profile, loading, signIn, signOut, getToken,
  isAdmin, isEditor, role }`
- `getToken()` returns the current JWT access token
- Wrap the app in `<AuthProvider>` inside `main.jsx` or `App.jsx`
  (do not break existing providers)

### src/lib/api.js
Create this file:
- Export `setTokenProvider(fn)` — call once on app start
- Central `request(path, options)` function that:
  - Calls `getTokenFn()` to get the current JWT
  - Attaches `Authorization: Bearer <token>` header
  - Throws on non-ok responses using `data.error`
- Export `postsApi`, `caseStudiesApi`, `mediaApi`, `usersApi`,
  `analyticsApi` — each with typed methods (list, get, create,
  update, delete). For media uploads use FormData (no Content-Type
  header — let the browser set it with the boundary).

### src/components/layout/RouteGuard.jsx
Create this file:
- `<RequireAuth>` — redirects to `/admin/login` if not logged in
- `<RequireRole role="admin">` — redirects to `/admin/dashboard`
  if the user's role is below the required level
  (admin > editor > viewer)
- Show a neutral loading state while auth resolves


## FRONTEND — ROUTING

Open `src/App.jsx` (or wherever routes are defined).
ADD the following routes WITHOUT removing or modifying any existing ones:

```
/blog                       → BlogListingPage
/blog/:slug                 → BlogPostPage
/case-studies/:slug         → CMSCaseStudyPage  (dynamic, CMS-created only)
/admin/login                → AdminLoginPage
/admin                      → redirect to /admin/dashboard
/admin/dashboard            → AdminDashboard (RequireAuth)
/admin/posts                → AdminPostsPage (RequireAuth)
/admin/posts/new            → AdminPostEditor (RequireAuth)
/admin/posts/:id/edit       → AdminPostEditor (RequireAuth)
/admin/case-studies         → AdminCaseStudiesPage (RequireAuth)
/admin/case-studies/new     → AdminCaseStudyEditor (RequireAuth)
/admin/case-studies/:id/edit → AdminCaseStudyEditor (RequireAuth)
/admin/media                → AdminMediaPage (RequireAuth)
/admin/analytics            → AdminAnalyticsPage (RequireAuth)
/admin/users                → AdminUsersPage (RequireRole admin)
```


## FRONTEND — PUBLIC PAGES

### BlogListingPage (`/blog`)
- Fetch `GET /api/posts?status=published` on mount
- Render a grid of blog post cards:
  - Cover image (full width of card)
  - Category badge
  - Title (headline style)
  - Excerpt (2 lines max, truncated)
  - Author name + published date
  - "Read more →" link to `/blog/:slug`
- Show a loading skeleton while fetching
- Show an empty state if no posts yet: "No posts published yet."
- Match the existing site's typography, spacing, and color system
  exactly — inspect what fonts, colors, and spacing are already used
  and continue that pattern

### BlogPostPage (`/blog/:slug`)
- Fetch `GET /api/posts?slug=<slug>&status=published` on mount
- Render using the existing design language:
  - Full-width cover image with title overlaid or below (match the
    existing case study page layout as reference)
  - Author avatar/name + date + category
  - Rich text body (the `body` field is HTML from Tiptap — render
    with `dangerouslySetInnerHTML` inside a styled prose container)
  - `<head>` meta tags: title = `meta_title || title`, description =
    `meta_description`, og:image = `og_image_url || cover_image_url`
    Use React Helmet or the existing head management approach in the
    project — detect which is already used.
- Show 404 state if post not found or not published

### CMSCaseStudyPage (`/case-studies/:slug`)
IMPORTANT: Study the existing hardcoded case study page component
carefully. This new dynamic page must be VISUALLY IDENTICAL to it.
- Extract the layout/template from the existing case study page
- Replace hardcoded data with fetched data from
  `GET /api/case-studies/:id` (fetch by slug)
- Fields to render: title, client_name, industry, cover_image_url,
  excerpt, body (HTML), results (jsonb array of {metric, value})
- Head meta tags same as BlogPostPage above
- Show 404 state if not found or not published


## FRONTEND — LANDING PAGE INTEGRATION

Open the existing landing page component. Find the case studies
section. DO NOT modify anything inside it.

AFTER the existing case studies section (as a sibling element, not
nested inside), add a new component `<CMSCaseStudiesSection />`.

### CMSCaseStudiesSection component
- On mount, fetch `GET /api/case-studies?status=published&limit=3`
- If the response returns 0 items, render nothing (return null) —
  the section should be completely invisible until there is CMS content
- If items exist, render them using EXACTLY the same card/item
  design as the existing hardcoded case studies above
  - Extract the hardcoded card component into a shared component if
    it isn't already, so both hardcoded and dynamic cards use the
    same markup and styles
- Each card links to `/case-studies/:slug`
- No section heading needed unless the existing section has a "View
  all" or "More case studies" link — if it does, keep that pattern


## FRONTEND — CASE STUDIES LISTING PAGE INTEGRATION

Open the existing case studies listing page. DO NOT modify the
existing hardcoded list.

AFTER the last hardcoded item, add `<CMSCaseStudiesList />`:
- Fetch `GET /api/case-studies?status=published`
- If 0 results, render nothing
- Render each using the same card/item design as the existing list
- Each links to `/case-studies/:slug`


## FRONTEND — ADMIN DASHBOARD (ALL PAGES)

DESIGN RULE: The admin panel is a clean, functional internal tool.
Match the existing site's design tokens (colors, fonts, border
radius, shadow style) for consistency, but the layout is a standard
sidebar + content shell — it does not need to match the public site's
layout. Keep it professional and minimal.

### AdminLoginPage (`/admin/login`)
- Email + password form
- Call `signIn(email, password)` from AuthContext on submit
- On success, redirect to `/admin/dashboard`
- Show error message on failure
- If already logged in, redirect to `/admin/dashboard`

### AdminLayout (shared shell)
Wrap all `/admin/*` pages (except login) in a shared layout:
- Fixed left sidebar with navigation links:
  - Dashboard
  - Blog Posts
  - Case Studies
  - Media Library
  - Analytics
  - Users (only visible if `isAdmin`)
  - Sign out button at bottom
- Topbar showing current page title + logged-in user name and role
- Main content area (scrollable)

### AdminDashboard (`/admin/dashboard`)
- Stats row: total posts, total case studies, published posts,
  draft posts — fetch counts from the API
- Recent posts table: last 5 posts with title, status, date
- Recent case studies table: last 5 with title, client, status, date
- Quick action buttons: "New blog post", "New case study"

### AdminPostsPage (`/admin/posts`)
- Table with columns: Title, Status, Author, Category, Date, Actions
- Filter tabs: All | Draft | Published | Archived
- Search input (client-side filter on title)
- Actions per row: Edit (→ editor), Delete (admin only, confirm dialog)
- "New post" button → `/admin/posts/new`
- Pagination (20 per page)

### AdminPostEditor (`/admin/posts/new` and `/admin/posts/:id/edit`)
Two-column layout:
- Left (wider): Title input, Tiptap RichTextEditor for body
- Right (narrower): sidebar with:
  - Status selector (Draft / Published / Archived)
    — only admins see the Published option
  - Cover image (URL input + preview, or "Choose from media library"
    button that opens MediaPickerModal)
  - Category selector (dropdown)
  - Excerpt textarea
  - Collapsible "SEO" section containing:
    - Meta title input (character counter, warn >60)
    - Meta description textarea (character counter, warn >155)
    - OG image URL + preview
    - Canonical URL
    - Live Google snippet preview (shows title, URL, description
      as they would appear in search results)
- Save as Draft button (always visible)
- Publish button (admin only)
- Auto-save every 30 seconds using `PATCH /api/posts/:id`
  (only if the post already has an ID)
- On create (`/new`), call `POST /api/posts` on first manual save
- Show a "Saved" / "Saving..." indicator

### AdminCaseStudyEditor (`/admin/case-studies/new` and `/:id/edit`)
Same layout as PostEditor but with additional right-sidebar fields:
- Client name (text input)
- Industry (text input or dropdown)
- Results (dynamic list: add/remove rows, each row has
  "Metric" and "Value" text inputs — stored as jsonb array)

### AdminMediaPage (`/admin/media`)
- Grid of uploaded images (4 columns)
- Each item shows: thumbnail, filename, file size
- Click to select (highlights with a border)
- Upload button: opens file input, calls `POST /api/media`,
  refreshes grid on success
- Delete button on hover (admin only)
- Alt text editable inline (click to edit)
- `MediaPickerModal`: a modal version of this grid used by the
  editors to pick an image and return its URL. Export this as a
  reusable component.

### AdminAnalyticsPage (`/admin/analytics`)
- Period selector: 7d | 30d | 90d (default 30d)
- Stats row: Visitors, Pageviews, Bounce rate, Avg. visit duration
- Line chart: visitors and pageviews over time
  Use recharts (install if not present):
  `<LineChart>` with two `<Line>` elements
- Two side-by-side lists:
  - Top pages (path, visitors)
  - Traffic sources (source, visitors)
- All data from the analytics API endpoints

### AdminUsersPage (`/admin/users`) — admin only
- Table: Name, Email, Role, Joined date, Actions
- Actions: Change role (dropdown, inline save), Remove user
  (confirm dialog)
- "Invite user" button → modal with email input + role selector
  → calls `POST /api/users/invite`

### RichTextEditor component
Build at `src/components/editor/RichTextEditor.jsx`:

```
Extensions: StarterKit, Image, Link, Placeholder, CharacterCount
Toolbar buttons:
  Bold | Italic | Strikethrough | — | H2 | H3 | — |
  Bullet list | Ordered list | Blockquote | Code block | — |
  Link | Insert image (opens MediaPickerModal) | — | Undo | Redo
Character count shown below editor
Expose insertImage(url) via callback prop so MediaPickerModal
can insert an image into the editor body
```

### SEOFields component
Build at `src/components/editor/SEOFields.jsx`:
- Meta title input with live character counter (warn red >60)
- Meta description textarea with counter (warn red >155)
- OG image URL + image preview
- Canonical URL input
- Live Google snippet preview: shows the meta title, a fake URL
  path, and meta description styled to look like a Google result


## ENVIRONMENT FILES

Create `src/.env` (frontend) if it doesn't exist:
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_API_URL=http://localhost:4000/api
```

Create `backend/.env`:
```
PORT=4000
CLIENT_URL=http://localhost:5173
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
PLAUSIBLE_API_KEY=
PLAUSIBLE_SITE_ID=
```

Add both `.env` files to `.gitignore` if not already there.


## INSTALL COMMANDS

Run these after scaffolding:

```bash
# Backend
cd backend && npm install

# Frontend (add only what isn't already installed)
cd .. && npm install @tiptap/react @tiptap/starter-kit \
  @tiptap/extension-image @tiptap/extension-link \
  @tiptap/extension-placeholder @tiptap/extension-character-count \
  @supabase/supabase-js recharts
```


## RULES — DO NOT BREAK THESE

1. DO NOT delete, rename, or modify any existing page components,
   route definitions, or hardcoded data files.

2. DO NOT change the existing styling system. If the project uses
   Tailwind, use Tailwind. If it uses CSS modules, use CSS modules.
   Detect and match — do not introduce a new approach.

3. DO NOT change vite.config.js, index.html, or tsconfig.json
   (unless strictly necessary to add a path alias — if so, add only,
   do not remove existing config).

4. The `CMSCaseStudiesSection` and `CMSCaseStudiesList` components
   MUST return null when the API returns 0 published case studies.
   They should be invisible until there is actual CMS content.

5. All `/admin/*` routes MUST redirect to `/admin/login` if the user
   is not authenticated. Use the `RequireAuth` wrapper.

6. The `/admin/users` route MUST redirect to `/admin/dashboard` if
   the logged-in user is not an admin. Use the `RequireRole` wrapper.

7. Only admins can set a post or case study status to 'published'.
   Editors can only save drafts. Enforce this on BOTH the backend
   (middleware check in the PATCH route) and frontend (hide the
   Publish button from non-admins).

8. Rich text body is stored as HTML. Render it with
   `dangerouslySetInnerHTML` inside a container that has prose
   styles applied (large readable font, proper heading sizes,
   paragraph spacing, image max-width 100%).

9. Slugs are auto-generated from the title on the backend using
   `slugify(title, { lower: true, strict: true })`. The frontend
   does not generate slugs.

10. Media uploads go to Supabase Storage bucket named `media`.
    The public URL returned from storage is what gets saved in the
    database and used in posts.


## FINAL CHECKLIST

After building, verify:
- [ ] `GET /api/health` returns `{ ok: true }`
- [ ] Login at `/admin/login` works with a Supabase user
- [ ] Creating a draft blog post and saving works
- [ ] Publishing a post (as admin) makes it appear at `/blog`
- [ ] `/blog/:slug` renders the correct post with meta tags
- [ ] Creating a CMS case study and publishing it appears on
      `/case-studies/:slug`
- [ ] The published case study appears in `CMSCaseStudiesSection`
      on the landing page
- [ ] The published case study appears in `CMSCaseStudiesList`
      on the case studies listing page
- [ ] Uploading an image in the Media Library works
- [ ] Inserting a media image into the editor body works
- [ ] An editor-role user cannot publish (button hidden + API blocks)
- [ ] `/admin/users` is inaccessible to non-admins
- [ ] Existing hardcoded pages and case studies are unchanged