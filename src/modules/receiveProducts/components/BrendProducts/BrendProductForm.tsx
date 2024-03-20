import { ForwardedRef, forwardRef } from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";

import CustomInput from "../../../../components/common/FormikField/formik-field";
import { brandProductValidationSchema } from "../../scheme";
import { BrandProductDataTypes } from "../../types";
import useBaseStore from "../../../../store/base";
import { postRequest } from "../../../../services/postRequest";
import useReceiveProduct from "../../store";
import { putRequest } from "../../../../services/putRequest";
import { FileUpload } from "../../../../components/shared/FileUpload/FileUpload";
import { uploadFileForm } from "../../../../utils/uploadFile";

export type Ref = ForwardedRef<FormikProps<BrandProductDataTypes>>;

const BrendProductForm = forwardRef((_props, innerRef: Ref) => {
  const { setIsLoading, setRefresh } = useBaseStore();
  const { drawer, setDrawer } = useReceiveProduct();

  const id = drawer?.initialValues?.id;

  const handleSubmit = (values: BrandProductDataTypes) => {
    const file = values?.image;

    if (typeof file !== "string") {
      setIsLoading(true);
      uploadFileForm({ file })?.then((url) => {
        values["image"] = url as string | File;
        if (id) {
          putRequest({
            setButtonLoading: setIsLoading,
            setRefresh: setRefresh,
            url: `http://localhost:3000/brand-products/${id}`,
            values: values,
          });
        } else {
          postRequest({
            setButtonLoading: setIsLoading,
            setRefresh: setRefresh,
            url: "http://localhost:3000/brand-products",
            values: values,
          }).then(() => {});
        }

        setDrawer({
          isOpen: false,
        });
      });
    } else {
      putRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        url: `http://localhost:3000/brand-products/${id}`,
        values: values,
      });

      setDrawer({
        isOpen: false,
      });
    }
  };

  return (
    <Formik
      innerRef={innerRef}
      initialValues={
        drawer?.initialValues || {
          image: null,
          product_name: "",
          price: "",
          sell_price: "",
          count: "",
        }
      }
      onSubmit={handleSubmit}
      validationSchema={brandProductValidationSchema}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form>
            <div className="space-y-2">
              <Field name="image">
                {() => (
                  <>
                    <FileUpload
                      image={values?.image}
                      setFieldValue={setFieldValue}
                      className="h-56"
                    />
                    <div className="text-red-500">
                      <ErrorMessage name={"image"} />
                    </div>
                  </>
                )}
              </Field>
              <Field
                name="product_name"
                type="text"
                placeholder="Mahsulot nomi"
                component={CustomInput}
              />
              <Field
                name="price"
                type="number"
                placeholder="Tan narxi"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
                component={CustomInput}
              />
              <Field
                name="sell_price"
                type="number"
                placeholder="Sotuv narxi"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
                component={CustomInput}
              />
              <Field
                name="count"
                type="number"
                placeholder="Mahsulot soni"
                component={CustomInput}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default BrendProductForm;
