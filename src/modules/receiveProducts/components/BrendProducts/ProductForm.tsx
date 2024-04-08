import { forwardRef } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import CustomInput from "../../../../components/common/FormikField/formik-field";
import { brandProductValidationSchema } from "../../scheme";
import { BrandProductDataTypes, PropsRefTypes } from "../../types";
import useBaseStore from "../../../../store/base";
import { postRequest } from "../../../../services/postRequest";
import useReceiveProduct from "../../store";
import { putRequest } from "../../../../services/putRequest";
import { FileUpload } from "../../../../components/shared/FileUpload/FileUpload";
import { uploadFileForm } from "../../../../utils/uploadFile";
import { brandProductFK, brandProductIV } from "../../constants";
import { notifySuccess } from "../../../../components/common/ModalFooter/Toast/react-toast";

const ProductForm = forwardRef((_props, innerRef: PropsRefTypes) => {
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
            path: `brand-products/${id}`,
            values: values,
          }).then(() => {
            notifySuccess({
              message: "Mahsulot muvaffaqiyatli tahrirlandi",
            });
          });
        } else {
          postRequest({
            setButtonLoading: setIsLoading,
            setRefresh: setRefresh,
            path: "brand-products",
            values: values,
          }).then(() => {
            notifySuccess({
              message: "Mahsulot muvaffaqiyatli qo'shildi",
            });
            setDrawer({
              isOpen: false,
            });
          });
        }

        setDrawer({
          isOpen: false,
        });
      });
    } else {
      putRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        path: `brand-products/${id}`,
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
      enableReinitialize
      initialValues={drawer?.initialValues || brandProductIV}
      onSubmit={handleSubmit}
      validationSchema={brandProductValidationSchema}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form>
            <div className="space-y-2">
              <Field name={brandProductFK.key1}>
                {() => (
                  <>
                    <FileUpload
                      image={values?.image}
                      setFieldValue={setFieldValue}
                    />
                    <div className="text-red-500">
                      <ErrorMessage name={"image"} />
                    </div>
                  </>
                )}
              </Field>
              <Field
                name={brandProductFK.key2}
                type="text"
                placeholder="Mahsulot nomi"
                variant="faded"
                component={CustomInput}
              />
              <Field
                name={brandProductFK.key3}
                type="number"
                placeholder="Tan narxi"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
                variant="faded"
                component={CustomInput}
              />
              <Field
                name={brandProductFK.key4}
                type="number"
                placeholder="Sotuv narxi"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
                variant="faded"
                component={CustomInput}
              />
              <Field
                name={brandProductFK.key5}
                type="number"
                placeholder="Mahsulot soni"
                variant="faded"
                component={CustomInput}
              />
              <Field
                name={brandProductFK.key6}
                type="text"
                placeholder="Brend nomi"
                variant="faded"
                component={CustomInput}
              />
              <Field
                name={brandProductFK.key7}
                type="text"
                placeholder="Rang"
                variant="faded"
                component={CustomInput}
              />
              <Field
                name={brandProductFK.key8}
                type="text"
                placeholder="Mahsulot haqida ma'lumot"
                variant="faded"
                component={CustomInput}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default ProductForm;
