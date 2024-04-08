import { useRef } from "react";
import { FormikProps } from "formik";

import { CustomModalFooter } from "../../../components";
import CustomModal from "../../../components/common/Modal/Modal";
import { BrandProductDataTypes } from "../types";
import useReceiveProduct from "../store";
import ProductForm from "../components/BrendProducts/ProductForm";

const CheckProductModal = () => {
  const { setDrawer, drawer } = useReceiveProduct();
  const formRef = useRef<FormikProps<BrandProductDataTypes>>(null);

  const id = drawer?.initialValues?.id;

  return (
    <CustomModal
      modalBodyChildren={<ProductForm ref={formRef} />}
      modalFooterChildren={
        <CustomModalFooter
          onSubmit={() => {
            formRef.current?.handleSubmit();
          }}
          openText={id ? "Tahrirlash" : "Qo'shish"}
          closeText="Bekor qilish"
          onClose={() => setDrawer({ isOpen: false })}
        />
      }
      modalHeaderTitle={id ? "Mahsulot tahrirlash" : "Mahsulot qo'shish"}
      isOpen={drawer?.isOpen}
      setIsOpen={() => setDrawer({ isOpen: false })}
    />
  );
};

export default CheckProductModal;
