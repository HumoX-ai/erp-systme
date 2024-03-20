/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { PreviewImage } from "../../../modules/receiveProducts/components/BrendProducts/PreviewImage";
import { SvgIcon } from "../../ui/svgIcon";

const firebaseConfig = {
  apiKey: "AIzaSyCJibfaGj4rWZunTBYDBlCHkUWhBIOPx7M",
  authDomain: "erp-project-a162b.firebaseapp.com",
  projectId: "erp-project-a162b",
  storageBucket: "erp-project-a162b.appspot.com",
  messagingSenderId: "212731630675",
  appId: "1:212731630675:web:c412654545576ce9a4a2a6",
  measurementId: "G-4SXC4MBWZC",
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line react-refresh/only-export-components
export const imageDb = getStorage(app);

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
    setFieldValue("image", file);
  };

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
