import { Field, Form, Formik } from "formik";
import { PropsRefTypes } from "../../../receiveProducts/types";
import CustomInput from "../../../../components/common/FormikField/formik-field";
import { Tab, Tabs } from "@nextui-org/react";

export const ProductForm = ({ innerRef }: { innerRef: PropsRefTypes }) => {
  const tabs = [
    {
      id: "cash",
      label: "Naqd pul",
    },
    {
      id: "card",
      label: "Xisob raqam",
    },
  ];

  const handleSubmit = () => {};

  return (
    <Formik
      innerRef={innerRef}
      enableReinitialize
      initialValues={{ name: "" }}
      onSubmit={handleSubmit}
      //   validationSchema={brandProductValidationSchema}
    >
      {() => {
        return (
          <Form>
            <div className="space-y-2">
              <Field
                name={"firstName"}
                type="text"
                placeholder="Mijoz ismi"
                variant="bordered"
                color="primary"
                component={CustomInput}
              />
              <Field
                name={"surname"}
                type="text"
                placeholder="Mijoz familasi"
                variant="bordered"
                color="primary"
                component={CustomInput}
              />
              <Field
                name={"phone_number"}
                type="number"
                placeholder="Telefon raqami"
                variant="bordered"
                color="primary"
                component={CustomInput}
              />
              <Field
                name={"address"}
                type="text"
                placeholder="Manzili"
                variant="bordered"
                color="primary"
                component={CustomInput}
              />
              <Tabs
                aria-label="Dynamic tabs"
                color="primary"
                fullWidth
                items={tabs}
                variant="bordered"
              >
                {(item) => <Tab key={item.id} title={item.label} />}
              </Tabs>
              <div className="flex flex-col justify-center mt-4 bg-white max-md:max-w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6131044.253373623!2d64.6085751!3d41.38116805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1711540050279!5m2!1sen!2s"
                  height="450"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
