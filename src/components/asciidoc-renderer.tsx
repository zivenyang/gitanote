import Asciidoctor from "asciidoctor";

const asciidoctor = Asciidoctor();

const AsciidocRenderer = ({ content }: { content: string }) => {
  const html = asciidoctor.convert(content);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default AsciidocRenderer;
