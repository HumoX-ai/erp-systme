import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "../components/shared/FileUpload/FileUpload";
import { v4 } from "uuid";

export const uploadFileForm = ({ file }: { file: string | File }) => {
  if (file !== null) {
    // setIsLoading(true);
    const imgRef = ref(imageDb, `files/${v4()}`);
    return uploadBytes(imgRef, file as Blob | Uint8Array | ArrayBuffer)
      .then((val) => {
        return getDownloadURL(val.ref);
      })
      .then((downloadUrl) => {
        console.log("Download URL:", downloadUrl);
        return downloadUrl;
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        throw error;
      });
  }

  return Promise.reject(new Error("File is null"));
};
