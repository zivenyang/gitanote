import { useState } from "react";
import { saveAs } from "file-saver";
import { Button } from "@nextui-org/button";

import DefaultLayout from "@/layouts/default";
import TiptapEditor from "@/components/editor";
import AsciidocRenderer from "@/components/asciidoc-renderer";

export default function IndexPage() {
  const [content, setContent] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setContent(reader.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "document.adoc");
  };

  return (
    <DefaultLayout>
      <label htmlFor="fileInput">选择 AsciiDoc 文件：</label>
      <input
        accept=".adoc"
        id="fileInput"
        type="file"
        onChange={handleFileChange}
      />
      <Button onClick={handleExport}>导出 AsciiDoc 文件</Button>
      <TiptapEditor onChange={setContent} />
      <AsciidocRenderer content={content} />
    </DefaultLayout>
  );
}
