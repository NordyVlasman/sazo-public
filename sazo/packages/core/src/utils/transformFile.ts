import { TransformedFile } from "@sazo/types";

export function transformFile(file: File): TransformedFile {
  const type = file.type;
  return {
    id: `${file.name}-${file.size}-${file.type}`,
    raw: new File([file], file.name, { type }),
    type,
    key: null,
    preview_file_path: null,
    error: null,
  }
}
