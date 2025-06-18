export type UploadFileData = {
  userEmail: string;
  fileData: {
    filename: string;
    mimetype: string;
  };
};

export interface FileItem {
  id: string;
  filename: string;
  url: string;
  uploadedAt: string;
}
