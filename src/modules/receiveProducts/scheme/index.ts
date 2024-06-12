import * as Yup from "yup";

export const brandProductValidationSchema = Yup.object().shape({
  background_img: Yup.mixed()
    .required("Background image is required")
    .test(
      "fileType",
      "Unsupported file format. Please upload a JPG, PNG or GIF file.",
      (value) => {
        if (!value) return false; // Return false if no file is provided
        const allowedFormats = ["image/jpeg", "image/png", "image/gif"];
        const fileType = value instanceof File ? value.type : "";
        return allowedFormats.includes(fileType);
      }
    ),
  name: Yup.string().required("Product name is required"),
  first_price: Yup.number()
    .required("First price is required")
    .positive("First price must be a positive number"),
  sale_price: Yup.number()
    .required("Sale price is required")
    .positive("Sale price must be a positive number"),
  stock: Yup.number()
    .required("Stock quantity is required")
    .integer("Stock quantity must be an integer")
    .min(0, "Stock quantity cannot be negative"),

  brand: Yup.string().required("Brand is required"),
  where_to: Yup.string().required("Where to is required"),
  color: Yup.string().required("Color is required"),
  description: Yup.string().required("Description is required"),
});
