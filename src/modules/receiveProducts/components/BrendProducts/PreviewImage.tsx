import { useEffect, useState } from "react";

export const PreviewImage = ({ file }: { file: string | File }) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (typeof file !== "string" && file) {
      const reader = new FileReader();
      reader?.readAsDataURL(file);

      reader.onload = () => {
        setPreview(reader?.result);
      };
    } else {
      setPreview(file);
    }
  }, [file]);

  return (
    <img
      className="object-contain w-full h-full"
      src={preview as string}
      alt="upload-img"
      width={190}
      height={190}
    />
  );
};
