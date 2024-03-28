import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";

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
    <Image
      className="w-72 h-72 object-contain rounded-3xl"
      src={preview as string}
      width={190}
      height={190}
    />
  );
};
