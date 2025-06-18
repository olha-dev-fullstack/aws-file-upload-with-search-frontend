import { FileTable } from "@/components/FileTable";
import PreviewComponent from "@/components/PreviewComponents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import usePersistedState from "@/hooks/usePersistedState";
import { useUploadFile } from "@/hooks/useUploadFile";
import { UploadFileData } from "@/lib/types/file";
import { useState, type FormEvent } from "react";

const UploadPage = () => {
  const [email, setEmail] = usePersistedState("userEmail", "");
  const [file, setFile] = useState<null | File>(null);
  const [fileUrl, setFileUrl] = useState<null | string>(null);
  const { mutate: uploadFile } = useUploadFile();

  const handleFileChange = (event: { target: { files: File[] } }) => {
    if (event.target.files[0]) {
      console.log("No file selected");
    }
    const selectedFile = event.target!.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setFileUrl(URL.createObjectURL(selectedFile));
    } else {
      setFileUrl(null);
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setFileUrl(null);
  };

  const handleFileUpload = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const uploadData: UploadFileData = {
      userEmail: email,
      fileData: {
        filename: file.name,
        mimetype: file.type,
      },
    };
    try {
      uploadFile({ uploadData, file });
    } catch (e: any) {
      console.log(e);
    } finally {
      handleClearFile();
    }
  };

  return (
    <div className="flex flex-col justify-center w-auto p-10 gap-2">
      <FileTable />
      <h2 className="font-bold">File Upload</h2>
      <form
        onSubmit={handleFileUpload}
        className="flex flex-col justify-center w-full max-w-sm gap-4"
      >
        <Input
          accept=".pdf, .docx"
          name="file"
          required
          type="file"
          onChange={handleFileChange}
        />
        {fileUrl && (
          <PreviewComponent fileUrl={fileUrl} fileType={file!.type} />
        )}
        <div className="flex gap-4">
          <Button type="submit" className="max-w-fit">
            Upload
          </Button>
          <Button
            type="reset"
            variant="outline"
            className="max-w-fit place-self-end"
            onClick={handleClearFile}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
