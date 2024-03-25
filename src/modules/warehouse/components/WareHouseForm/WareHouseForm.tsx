import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikValues,
} from "formik";
import { Textarea } from "@nextui-org/react";

import useWareHouseStore from "../../store";
import { wareHouseValidationSchema } from "../../scheme";
import { FileUpload } from "../../../../components/shared/FileUpload/FileUpload";
import CustomInput from "../../../../components/common/FormikField/formik-field";
import { CustomModalFooter } from "../../../../components";
import { BrendsProductFormTypes } from "../../types";
import CustomDropdown from "../../../../components/common/DropDown/drop-down";
import useBaseStore from "../../../../store/base";
import { uploadFileForm } from "../../../../utils/uploadFile";
import { putRequest } from "../../../../services/putRequest";
import { postRequest } from "../../../../services/postRequest";
import { Option } from "../../../../components/common/ModalFooter/types";
import { wareHouseFK } from "../../constants";

const WareHouseFormComponent = () => {
  const { setIsLoading, setRefresh } = useBaseStore();
  const { brandSelectData, wareHouseFormData } = useWareHouseStore();

  const id = wareHouseFormData?.id;

  const handleSubmit = (
    values: BrendsProductFormTypes,
    { resetForm }: { resetForm: () => void }
  ) => {
    const file = values?.image;

    if (typeof file !== "string") {
      setIsLoading(true);
      uploadFileForm({ file })?.then((url) => {
        values["image"] = url as string | File;
        if (id) {
          putRequest({
            setButtonLoading: setIsLoading,
            setRefresh: setRefresh,
            path: `warehouse/${id}`,
            values: values,
          });
        } else {
          postRequest({
            setButtonLoading: setIsLoading,
            setRefresh: setRefresh,
            path: "warehouse",
            values: values,
          });
          resetForm();
        }
      });
    } else {
      putRequest({
        setButtonLoading: setIsLoading,
        setRefresh: setRefresh,
        path: `warehouse/${id}`,
        values: values,
      });
    }
  };

  return (
    <Formik
      initialValues={wareHouseFormData}
      enableReinitialize
      onSubmit={handleSubmit}
      validationSchema={wareHouseValidationSchema}
    >
      {({ setFieldValue, values, resetForm }) => {
        return (
          <Form>
            <div className="grid grid-cols-2 gap-10">
              <div className="grid grid-cols-2 gap-6">
                <Field
                  name={wareHouseFK.key1}
                  type="text"
                  variant="faded"
                  placeholder="Mahsulot nomi"
                  component={CustomInput}
                />
                <Field
                  name={wareHouseFK.key2}
                  type="number"
                  placeholder="Tan narxi"
                  variant="faded"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  component={CustomInput}
                />
                <Field
                  name={wareHouseFK.key3}
                  variant="faded"
                  type="number"
                  placeholder="Sotuv narxi"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  component={CustomInput}
                />
                <Field name={wareHouseFK.key4}>
                  {({ field, form }: FieldProps<FormikValues>) => {
                    return (
                      <CustomDropdown
                        options={brandSelectData?.map((items) => ({
                          value: items?.id,
                          label: items?.brand_name,
                        }))}
                        onSelect={(option: Option) => {
                          form?.setFieldValue(field?.name, option);
                        }}
                        errorName={field?.name}
                        initialValue={field?.value as Option}
                      />
                    );
                  }}
                </Field>
                <Field
                  name={wareHouseFK.key5}
                  type="number"
                  variant="faded"
                  placeholder="Mahsulot soni"
                  component={CustomInput}
                />
                <Field
                  name={wareHouseFK.key6}
                  type="text"
                  variant="faded"
                  placeholder="Mahsulot rangi"
                  component={CustomInput}
                />
                <div className="col-span-2">
                  <Field name={wareHouseFK.key7}>
                    {({ field }: FieldProps<FormikValues["description"]>) => {
                      return (
                        <Textarea
                          maxRows={4}
                          placeholder="Mahsulot haqida"
                          variant="faded"
                          {...field}
                        />
                      );
                    }}
                  </Field>
                </div>
              </div>
              <Field name={wareHouseFK.key8}>
                {() => (
                  <div>
                    <FileUpload
                      className="h-full"
                      image={values?.image}
                      setFieldValue={setFieldValue}
                    />
                    <div className="text-red-500">
                      <ErrorMessage name={"image"} />
                    </div>
                  </div>
                )}
              </Field>
            </div>

            <div className="flex items-center justify-end m-5">
              <CustomModalFooter
                openText="Qo'shish"
                closeText="Bekor qilish"
                onClose={() => resetForm()}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default WareHouseFormComponent;
