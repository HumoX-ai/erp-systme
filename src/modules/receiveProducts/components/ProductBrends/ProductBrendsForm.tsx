import { ForwardedRef, forwardRef } from "react";
import { Field, Form, Formik, FormikProps } from "formik";

import CustomInput from "../../../../components/common/FormikField/formik-field";
import { ProductBrendsFormTypes } from "../../types";
import useBaseStore from "../../../../store/base";
import { postRequest } from "../../../../services/postRequest";
import useReceiveProduct from "../../store";
import { putRequest } from "../../../../services/putRequest";
import { brandFK, brandIV } from "../../constants";
import { brandProductValidationSchema } from "../../scheme";

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
        path: `brands/${id}`,
        values: values,
      });
    } else {
      postRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        path: "brands",
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
      enableReinitialize
      initialValues={drawer?.initialValues || brandIV}
      onSubmit={handleSubmit}
      validationSchema={brandProductValidationSchema}
    >
      <Form>
        <div className="space-y-2">
          <Field
            name={brandFK.key1}
            type="text"
            placeholder="Brend nomi"
            variant="faded"
            component={CustomInput}
          />
        </div>
      </Form>
    </Formik>
  );
});

export default ProductBrendsForm;
