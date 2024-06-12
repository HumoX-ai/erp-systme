import { forwardRef } from "react";
import { Field, Form, Formik } from "formik";

import CustomInput from "../../../../components/common/FormikField/formik-field";
import { brandProductValidationSchema } from "../../scheme";
import { BrandProductDataTypes, PropsRefTypes } from "../../types";
import useBaseStore from "../../../../store/base";
import { postRequest } from "../../../../services/postRequest";
import useReceiveProduct from "../../store";
import { putRequest } from "../../../../services/putRequest";

const ProductForm = forwardRef((_props, innerRef: PropsRefTypes) => {
  const { setIsLoading, setRefresh } = useBaseStore();
  const { drawer, setDrawer } = useReceiveProduct();

  const id = drawer?.initialValues?.id;

  const handleSubmit = (values: BrandProductDataTypes) => {
    const file = values?.image;

    if (typeof file !== "string") {
      setIsLoading(true);
      if (id) {
        putRequest({
          setButtonLoading: setIsLoading,
          setRefresh: setRefresh,
          path: `brand-products/${id}`,
          values: values,
        });
      } else {
        postRequest({
          setButtonLoading: setIsLoading,
          setRefresh: setRefresh,
          path: "manager2/warehouse_product",
          values: values,
        }).then(() => {
          setDrawer({
            isOpen: false,
          });
        });
      }

      setDrawer({
        isOpen: false,
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
      initialValues={drawer?.initialValues}
      onSubmit={handleSubmit}
      validationSchema={brandProductValidationSchema}
    >
      {() => {
        return (
          <Form>
            <div className="space-y-2">
              <Field
                name="name"
                type="text"
                placeholder="Mahsulot nomi"
                variant="faded"
                component={CustomInput}
              />
              <Field
                name="sale_price"
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
                name="stock"
                type="number"
                placeholder="Mahsulot soni"
                variant="faded"
                component={CustomInput}
              />
              <Field
                name="brand_name"
                type="text"
                placeholder="Modeli"
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
