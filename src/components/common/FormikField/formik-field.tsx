/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@nextui-org/react";

const CustomInput: React.FC<any> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const errorText = touched[field.name] && errors[field.name];

  return (
    <div>
      <Input
        {...field}
        {...props}
        // className="mt-1 bg-[#F5F7FA] p-4 border border-[#E2E2E2] rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
      />
      {errorText && <div className="text-red-500 text-sm">{errorText}</div>}
    </div>
  );
};

export default CustomInput;
