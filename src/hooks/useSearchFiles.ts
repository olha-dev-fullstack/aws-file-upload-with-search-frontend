import { apiClient } from "@/lib/api/apiClient";
import { useQuery } from "@tanstack/react-query";

type SearchResult = {
  id: string;
  filename: string;
  uploadedAt: string;
  snippets: string[];
};

export const useSearchFiles = (debouncedQuery: string) => {
  const userEmail = localStorage.getItem("userEmail") || "";

  return useQuery<SearchResult[]>({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      if (!debouncedQuery) return [];
      const res = await apiClient.get("/files/search", {
        params: { q: debouncedQuery },
        headers: {
          "x-user-email": userEmail,
        },
      });
      return res.data;
    },
    enabled: !!debouncedQuery,
  });
};
