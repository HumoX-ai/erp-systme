/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import { brandFK, brandProductFK } from "../constants";

export const brandValidationSchema = Yup.object().shape({
  [brandFK.key1]: Yup.string().required("Brand nomini kiriting!"),
});

export const brandProductValidationSchema = Yup.object({
  [brandProductFK.key1]: Yup.mixed()
    .required("Rasm tanlang!")
    .test(
      "FILE_TYPE",
      "PNG yoki JPEG formatdan foydalaning!",
      (value: any) => value && ["image/png", "image/jpeg"].includes(value?.type)
    ),
  // .test(
  //   "FILE_SIZE",
  //   "Tanlangan fayl hajmi katta! (maksimum 1 mb)",
  //   (value: any) => {
  //     value?.size && value?.size <= 1024 * 1024;
  //   }
  // ),
  [brandProductFK.key2]: Yup.string()
    .required("Mahsulot nomini kiriting!")
    .min(2)
    .max(30),
  [brandProductFK.key3]: Yup.number().required("Tan narxini kiriting!").min(1),
  [brandProductFK.key4]: Yup.number()
    .required("Sotuv narxini kiriting!")
    .min(1),
  [brandProductFK.key5]: Yup.number()
    .required("Mahsulot sonini kiriting")
    .min(1),
});
