/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import { wareHouseFK } from "../constants";

export const wareHouseValidationSchema = Yup.object({
  [wareHouseFK.key1]: Yup.string()
    .required("Mahsulot nomini kiriting!")
    .min(2, "Juda qisqa")
    .max(30, "Juda uzun"),
  [wareHouseFK.key2]: Yup.number()
    .required("Tan narxini kiriting!")
    .min(1, "0 dan yuqori son kiriting!"),
  [wareHouseFK.key3]: Yup.number()
    .required("Sotuv narxini kiriting!")
    .min(1, "0 dan yuqori son kiriting!"),
  [wareHouseFK.key4]: Yup.object()
    .shape({
      label: Yup.string().required("Tanlang!"),
      value: Yup.string().required(),
    })
    .required("Brend nomini tanlang!"),
  [wareHouseFK.key5]: Yup.number()
    .required("Mahsulot sonini kiriting!")
    .min(1, "0 dan yuqori son kiriting!"),
  [wareHouseFK.key6]: Yup.string().required("Mahsulot rangini kiriting!"),
  [wareHouseFK.key8]: Yup.mixed()
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
});
