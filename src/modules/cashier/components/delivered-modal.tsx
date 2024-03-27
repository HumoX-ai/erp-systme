import { Button } from "@nextui-org/react";
import CustomModal from "../../../components/common/Modal/Modal";

const DeliveredModal = ({
  setIsModalOpen,
  isModalOpen,
  selectedProduct,
  handleConfirmDelivery,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  return (
    <div>
      <CustomModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalHeaderTitle="Tasdiqlash"
        modalBodyChildren={
          selectedProduct ? (
            <div className="flex flex-col gap-2">
              <p>Mahsulot: {selectedProduct.productName}</p>
              <p>Mijoz: {selectedProduct.name}</p>
            </div>
          ) : null
        }
        modalFooterChildren={
          <Button color="primary" onClick={handleConfirmDelivery}>
            Tasdiqlash
          </Button>
        }
      />
    </div>
  );
};

export default DeliveredModal;
