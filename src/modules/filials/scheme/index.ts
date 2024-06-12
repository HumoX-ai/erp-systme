import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Filial kiriting"),
  address: Yup.string().required("Manzil kiriting"),
  phone_number: Yup.string().required("Telefon raqam kiriting"),
});
