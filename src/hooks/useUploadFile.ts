import { apiClient } from "@/lib/api/apiClient";
import { UploadFileData } from "@/lib/types/file";
import { uploadToS3 } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUploadFile = () => {
  const queryClient = useQueryClient();
  const getS3PresignedUrl = async (uploadData: UploadFileData) => {
    const s3UploadUrl = await apiClient.post<{ uploadUrl: string }>(
      "/upload",
      uploadData
    );
    return s3UploadUrl.data.uploadUrl;
  };

  return useMutation({
    mutationFn: async ({
      uploadData,
      file,
    }: {
      uploadData: UploadFileData;
      file: File;
    }) => {
      const presignedUrl = await getS3PresignedUrl(uploadData);
      const response = await uploadToS3(presignedUrl, file);
      return response;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["files"] }),
  });
};
