/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import { brandProductFK } from "../constants";

export const brandProductValidationSchema = Yup.object({
  [brandProductFK.key2]: Yup.string()
    .required("Mahsulot nomini kiriting!")
    .min(2)
    .max(30),
  [brandProductFK.key3]: Yup.number().required("Tan narxini kiriting!").min(1),
  [brandProductFK.key5]: Yup.number()
    .required("Mahsulot sonini kiriting")
    .min(1),
  [brandProductFK.key6]: Yup.string().required("Model kiriting!"),
});
