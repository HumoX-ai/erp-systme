import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  filialName: Yup.string().required("Filial kiriting"),
  address: Yup.string().required("Manzil kiriting"),
  phone: Yup.string().required("Telefon raqam kiriting"),
  quantity: Yup.number().required("Mahsulot soni kiriting"),
});
