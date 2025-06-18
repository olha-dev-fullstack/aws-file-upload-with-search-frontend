import { apiClient } from "@/lib/api/apiClient";
import { FileItem } from "@/lib/types/file";
import { useQuery } from "@tanstack/react-query";

export const useFiles = () => {
  return useQuery({
    queryKey: ["files"],
    queryFn: async (): Promise<FileItem[]> => {
      const res = await apiClient.get<FileItem[]>("/files");
      return res.data;
    },
  });
};
