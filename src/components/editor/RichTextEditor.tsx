import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import { Bold, Code, Heading2, Heading3, ImageIcon, Italic, Link as LinkIcon, List, ListOrdered, Quote, Redo, Strikethrough, Undo } from "lucide-react";
import MediaPickerModal from "@/pages/admin/MediaPickerModal";

export default function RichTextEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit, Image, Link, Placeholder.configure({ placeholder: "Write the story..." }), CharacterCount],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) editor.commands.setContent(value || "");
  }, [editor, value]);

  if (!editor) return null;

  const button = (label: string, action: () => void, icon: JSX.Element, active = false) => (
    <button type="button" title={label} onClick={action} className={`w-9 h-9 rounded-md grid place-items-center ${active ? "bg-ef-blue text-white" : "bg-white hover:bg-ef-grey"}`}>{icon}</button>
  );

  return (
    <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b border-black/10 bg-ef-grey/40">
        {button("Bold", () => editor.chain().focus().toggleBold().run(), <Bold size={16} />, editor.isActive("bold"))}
        {button("Italic", () => editor.chain().focus().toggleItalic().run(), <Italic size={16} />, editor.isActive("italic"))}
        {button("Strikethrough", () => editor.chain().focus().toggleStrike().run(), <Strikethrough size={16} />, editor.isActive("strike"))}
        {button("H2", () => editor.chain().focus().toggleHeading({ level: 2 }).run(), <Heading2 size={16} />, editor.isActive("heading", { level: 2 }))}
        {button("H3", () => editor.chain().focus().toggleHeading({ level: 3 }).run(), <Heading3 size={16} />, editor.isActive("heading", { level: 3 }))}
        {button("Bullet list", () => editor.chain().focus().toggleBulletList().run(), <List size={16} />, editor.isActive("bulletList"))}
        {button("Ordered list", () => editor.chain().focus().toggleOrderedList().run(), <ListOrdered size={16} />, editor.isActive("orderedList"))}
        {button("Blockquote", () => editor.chain().focus().toggleBlockquote().run(), <Quote size={16} />, editor.isActive("blockquote"))}
        {button("Code block", () => editor.chain().focus().toggleCodeBlock().run(), <Code size={16} />, editor.isActive("codeBlock"))}
        {button("Link", () => { const href = window.prompt("URL"); if (href) editor.chain().focus().setLink({ href }).run(); }, <LinkIcon size={16} />)}
        {button("Insert image", () => setPickerOpen(true), <ImageIcon size={16} />)}
        {button("Undo", () => editor.chain().focus().undo().run(), <Undo size={16} />)}
        {button("Redo", () => editor.chain().focus().redo().run(), <Redo size={16} />)}
      </div>
      <EditorContent editor={editor} className="prose prose-lg max-w-none min-h-[360px] p-5 focus:outline-none" />
      <p className="px-5 py-3 border-t border-black/10 text-xs text-ef-navy/50">{editor.storage.characterCount.characters()} characters</p>
      <MediaPickerModal open={pickerOpen} onOpenChange={setPickerOpen} onSelect={(url) => editor.chain().focus().setImage({ src: url }).run()} />
    </div>
  );
}
