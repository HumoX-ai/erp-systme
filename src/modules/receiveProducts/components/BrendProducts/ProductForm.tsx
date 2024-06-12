import { forwardRef, useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import CustomInput from "../../../../components/common/FormikField/formik-field";
import {
  BrandDataTypes,
  BrandProductDataTypes,
  PropsRefTypes,
} from "../../types";
import useBaseStore from "../../../../store/base";
import { postRequest } from "../../../../services/postRequest";
import useReceiveProduct from "../../store";
import { putRequest } from "../../../../services/putRequest";
import { brandProductFK, brandProductIV } from "../../constants";
import { notifySuccess } from "../../../../components/common/ModalFooter/Toast/react-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { Select, SelectItem } from "@nextui-org/react";

const ProductForm = forwardRef((_props, innerRef: PropsRefTypes) => {
  const { setIsLoading, setRefresh } = useBaseStore();
  const { drawer, setDrawer } = useReceiveProduct();
  const [brands, setBrands] = useState({ results: [] });

  const id = drawer?.initialValues?.id;

  useEffect(() => {
    // Brandlarni olish
    axios
      .get("http://188.166.209.136:8080/API/manager2/brand", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      })
      .then((response) => {
        setBrands(response.data);
      });
  }, []);

  const handleSubmit = (values: BrandProductDataTypes) => {
    const formData = new FormData();

    // Formdan kelgan ma'lumotlarni FormData ga qo'shish
    for (const key in values) {
      formData.append(key, values[key]);
    }

    // Agar rasm mavjud bo'lsa, uni ham FormData ga qo'shish
    const file = values[brandProductFK.key1];
    if (file) {
      formData.append("file", file);
    }

    setIsLoading(true);

    if (id) {
      putRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        path: `manager1/products/${id}`,
        values: formData,
      }).then(() => {
        notifySuccess({
          message: "Mahsulot muvaffaqiyatli tahrirlandi",
        });
      });
    } else {
      postRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        path: "manager1/products/",
        values: formData,
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
  };

  return (
    <Formik
      innerRef={innerRef}
      enableReinitialize
      initialValues={drawer?.initialValues || brandProductIV}
      onSubmit={handleSubmit}
      // validationSchema={brandProductValidationSchema}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form>
            <div className="space-y-2">
              <Field name={brandProductFK.key1}>
                {() => (
                  <>
                    <input
                      type="file"
                      onChange={(e) =>
                        setFieldValue(brandProductFK.key1, e.target.files?.[0])
                      }
                    />
                    <ErrorMessage
                      name={brandProductFK.key1}
                      component="div"
                      className="text-red-500 text-xs"
                    />
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
              <Select
                label="Brend"
                className="max-w-full"
                name="brand"
                value={values.brand}
                onChange={(e) => setFieldValue("brand", e.target.value)}
              >
                {brands?.results?.map((brand: BrandDataTypes) => (
                  <SelectItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </SelectItem>
                ))}
              </Select>
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
              <Field
                name={"where_to"}
                type="text"
                placeholder="Mahsulot haqida ma'lumot"
                variant="faded"
                component={CustomInput}
              />

              <Field
                name={"status"}
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
