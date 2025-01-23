import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

export function FileUploader({ onFileUpload }: FileUploaderProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <Label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-secondary/50"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
          <p className="mb-2 text-sm text-muted-foreground">
            <span className="font-semibold">Click para subir</span> o arrastrar archivo
          </p>
          <p className="text-xs text-muted-foreground">Excel (.xlsx)</p>
        </div>
        <Input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".xlsx"
          onChange={handleChange}
        />
      </Label>
    </div>
  );
}