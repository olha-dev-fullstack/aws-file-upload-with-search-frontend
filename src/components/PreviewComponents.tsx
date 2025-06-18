import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PreviewComponent = ({ fileUrl, fileType }: {fileUrl: string, fileType: string}) => {
  if (!fileUrl) {
    return <p>No file selected.</p>;
  }
  if (fileType === "application/pdf") {
    return (
      <iframe
        src={fileUrl}
        title="PDF Preview"
        style={{ width: "100%", height: "500px" }}
      />
    );
  } else if (
    fileType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return (
      <DocViewer
        documents={[{ uri: fileUrl }]}
        pluginRenderers={DocViewerRenderers}
      />
    );
  } else {
    return <p>Unsupported file type.</p>;
  }
};

export default PreviewComponent;
