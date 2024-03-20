import { ForwardedRef, forwardRef } from "react";
import { Field, Form, Formik, FormikProps } from "formik";

import CustomInput from "../../../../components/common/FormikField/formik-field";
import { ProductBrendsFormTypes } from "../../types";
import useBaseStore from "../../../../store/base";
import { postRequest } from "../../../../services/postRequest";
import useReceiveProduct from "../../store";
import { putRequest } from "../../../../services/putRequest";
import { brandValidationSchema } from "../../scheme";

export type Ref = ForwardedRef<FormikProps<ProductBrendsFormTypes>>;

const ProductBrendsForm = forwardRef((_props, ref: Ref) => {
  const { setIsLoading, setRefresh } = useBaseStore();
  const { drawer, setDrawer } = useReceiveProduct();

  const id = drawer?.initialValues?.id;

  const handleSubmit = (values: ProductBrendsFormTypes) => {
    if (id) {
      putRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        url: `http://localhost:3000/brands/${id}`,
        values: values,
      });
    } else {
      postRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        url: "http://localhost:3000/brands",
        values: values,
      });
    }

    setDrawer({
      isOpen: false,
    });
  };

  return (
    <Formik
      innerRef={ref}
      initialValues={drawer?.initialValues || { brand_name: "" }}
      onSubmit={handleSubmit}
      validationSchema={brandValidationSchema}
    >
      <Form>
        <div className="space-y-2">
          <Field
            name="brand_name"
            type="text"
            placeholder="Brend nomi"
            component={CustomInput}
          />
        </div>
      </Form>
    </Formik>
  );
});

export default ProductBrendsForm;
