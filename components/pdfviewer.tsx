export default function PdfViewer() {
  const path = "/assets/Jack-Michell.pdf";

  return (
    <embed
      src={path}
      height="250px"
      width="100%"
      type="application/pdf"
      className="rounded-lg"
    />
  );
}
