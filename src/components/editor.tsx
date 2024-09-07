import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

interface TiptapEditorProps {
  onChange: (content: string) => void;
}

const TiptapEditor = ({ onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>开始编辑你的 AsciiDoc 文档吧！</p>",
  });

  useEffect(() => {
    if (!editor) return;

    editor.on("update", () => {
      const html = editor.getHTML();

      onChange(html);
    });
  }, [editor, onChange]);

  return <EditorContent editor={editor} />;
};

export default TiptapEditor;
