import { Spinner } from "@nextui-org/react";

const CustomLoading = () => {
  return (
    <div>
      <Spinner
        className="h-[90vh] flex items-center justify-center"
        color="white"
      />
    </div>
  );
};

export default CustomLoading;
