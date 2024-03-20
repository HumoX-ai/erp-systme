/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

export const brandValidationSchema = Yup.object().shape({
  brand_name: Yup.string().required("Brand nomini kiriting!"),
});

export const brandProductValidationSchema = Yup.object({
  image: Yup.mixed()
    .required("Rasm tanlang!"),
    // .test(
    //   "FILE_TYPE",
    //   "PNG yoki JPEG formatdan foydalaning!",
    //   (value: any) => value && ["image/png", "image/jpeg"].includes(value?.type)
    // ),
  // .test(
  //   "FILE_SIZE",
  //   "Tanlangan fayl hajmi katta! (maksimum 1 mb)",
  //   (value: any) => {
  //     value?.size && value?.size <= 1024 * 1024;
  //   }
  // ),
  product_name: Yup.string()
    .required("Mahsulot nomini kiriting!")
    .min(2)
    .max(30),
  price: Yup.number().required("Tan narxini kiriting!").min(1),
  sell_price: Yup.number().required("Sotuv narxini kiriting!").min(1),
  count: Yup.number().required("Mahsulot sonini kiriting").min(1),
});
