import React, { useState } from "react";
import { useDebounce } from "use-debounce";

import { useSearchFiles } from "@/hooks/useSearchFiles";
import { Button } from "./ui/button";
import { HighlightedText } from "./HighlightedText";

export const FileSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);

  const { data, isLoading, isError } = useSearchFiles(debouncedQuery);

  const handleSearchClick = () => {
    setQuery(searchInput);
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search file contents..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <Button onClick={handleSearchClick}>Search</Button>
      </div>

      {isLoading && <p className="text-gray-500">Searching...</p>}
      {isError && <p className="text-red-500">Error loading results</p>}

      <div className="space-y-3">
        {data?.map((result) => (
          <div key={result.id} className="p-4 border rounded-md shadow-sm">
            <p className="text-sm text-gray-500">{result.filename}</p>
            {result.snippets.map((snippet) => (
              <HighlightedText text={snippet} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
