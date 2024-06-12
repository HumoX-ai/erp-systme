/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { PreviewImage } from "../../../modules/receiveProducts/components/BrendProducts/PreviewImage";
import { SvgIcon } from "../../ui/svgIcon";

export const FileUpload = ({
  setFieldValue,
  image,
  className,
}: {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  image: string | File;
  className?: string;
}) => {
  const uploadChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0] as Blob | Uint8Array | ArrayBuffer;
    setFieldValue("background_image", file);
  };
  console.log(image);

  return (
    <label
      className={`flex flex-col items-center justify-center gap-y-2 cursor-pointer relative bg-[#F4F4F5] dark:bg-[#27272A] py-4 px-4 rounded-lg border-dashed border-2 hover:opacity-75 ${className}`}
      htmlFor="upload-img"
    >
      <input id="upload-img" hidden type="file" onChange={uploadChange} />
      {!image ? (
        <>
          <SvgIcon iconName="upload-img" width="70" height="60" />
          <p className="font-semibold text-base">
            Bosing & Fayl tashlash yoki{" "}
            <span className="text-[#1814F3] underline cursor-pointer transition-all hover:opacity-70 active:opacity-50">
              Browse
            </span>
          </p>
          <p className="text-xs">
            Qo’llab-quvvatlanadigan formatlar: JPEG, PNG
          </p>
        </>
      ) : (
        <PreviewImage file={image} />
      )}
    </label>
  );
};
