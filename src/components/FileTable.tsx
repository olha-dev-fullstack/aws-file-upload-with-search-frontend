import { useFiles } from "@/hooks/useFiles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export const FileTable = () => {
  const { data: files, isLoading, error } = useFiles();

  if (isLoading) return <p>Loading files...</p>;
  if (error) return <p>Error loading files.</p>;

  return (
    <div className="rounded-md border w-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Filename</TableHead>
            <TableHead>Uploaded</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files?.map((file) => (
            <TableRow key={file.id}>
              <TableCell>{file.filename}</TableCell>
              <TableCell>
                {format(new Date(file.uploadedAt), "yyyy-MM-dd HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
