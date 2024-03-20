import { useRef } from "react";
import { FormikProps } from "formik";

import { CustomModalFooter } from "../../../components";
import CustomModal from "../../../components/common/Modal/Modal";
import ProductBrendsForm from "../components/ProductBrends/ProductBrendsForm";
import { ProductBrendsFormTypes } from "../types";
import useReceiveProduct from "../store";

const ProductBrendsModal = () => {
  const { setDrawer, drawer } = useReceiveProduct();
  const formRef = useRef<FormikProps<ProductBrendsFormTypes>>(null);

  const id = drawer?.initialValues?.id;

  return (
    <CustomModal
      modalBodyChildren={<ProductBrendsForm ref={formRef} />}
      modalFooterChildren={
        <CustomModalFooter
          onSubmit={
            () => {
              formRef.current?.handleSubmit();
            }
          }
          openText={id ? "Tahrirlash" : "Qo'shish"}
          closeText="Bekor qilish"
          onClose={() => setDrawer({ isOpen: false })}
        />
      }
      modalHeaderTitle={id ? "Brend tahrirlash" : "Brend qo'shish"}
      isOpen={drawer?.isOpen}
      setIsOpen={() => setDrawer({ isOpen: false })}
    />
  );
};

export default ProductBrendsModal;
