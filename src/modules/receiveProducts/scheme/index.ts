import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  brand_name: Yup.string().required("Brand nomi majburiy"),
});
