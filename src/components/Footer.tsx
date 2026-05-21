import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinkClass =
  "text-white/60 text-sm hover:text-ef-lime transition-colors duration-200 relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-ef-lime after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left";

const Footer = () => (
  <footer className="bg-ef-navy border-t-2 border-ef-blue">
    <div className="container mx-auto py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div>
          <Logo variant="light" />
          <p className="text-white/60 text-sm mt-4 max-w-xs">
            EventFlow — The Smart Way to Run Events.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-sm mb-1">Navigation</h4>
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "About", path: "/about" },
            { label: "Pricing", path: "/pricing" },
            { label: "FAQ", path: "/faq" },
          ].map((link) => (
            <Link key={link.path} to={link.path} className={footerLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Stories & What's Next */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-sm mb-1">Stories</h4>
          <Link to="/blog" className={footerLinkClass}>Blog</Link>
          <Link to="/case-study" className={footerLinkClass}>Case Study</Link>

          <h4 className="text-white font-semibold text-sm mt-4 mb-1">What's Next</h4>
          <Link to="/v2" className={footerLinkClass}>V2</Link>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-sm mb-1">Contact</h4>
          <a href="tel:08154356486" className="text-white/60 text-sm hover:text-white transition-colors">08154356486</a>
          <a href="mailto:hello@eventflowafrica.com" className="text-white/60 text-sm hover:text-white transition-colors">hello@eventflowafrica.com</a>

          <h4 className="text-white font-semibold text-sm mt-4 mb-1">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/eventflow.africa" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ef-lime transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://x.com/eventflowafrica" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ef-lime transition-colors" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a 
  href="https://www.facebook.com/share/1GKhikBDj6" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-white/60 hover:text-ef-lime transition-colors" 
  aria-label="Facebook"
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
  </svg>
</a>

            <a href="https://whatsapp.com/channel/0029VbCKPamGzzKLyoNiNT3C" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ef-lime transition-colors" aria-label="WhatsApp Channel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">©2026 EventFlow. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-white/40 text-xs hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="text-white/40 text-xs hover:text-white/60 cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
