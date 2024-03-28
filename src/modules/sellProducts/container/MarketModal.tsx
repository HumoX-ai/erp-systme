import { CustomModalFooter } from "../../../components";
import CustomModal from "../../../components/common/Modal/Modal";
import { ProductModal } from "../components/ProductModal/ProductModal";
import useSellProductStore from "../store";

const MarketModal = () => {
  const { drawer, setDrawer } = useSellProductStore();

  return (
    <CustomModal
      size="5xl"
      isOpen={drawer?.isOpen}
      modalHeaderTitle="Xarid qilish oynasi"
      modalBodyChildren={<ProductModal />}
      modalFooterChildren={
        <CustomModalFooter
          onClose={() => setDrawer({ isOpen: false })}
          openText="Jo'natish"
          closeText="Bekor qilish"
        />
      }
      setIsOpen={() => setDrawer({ isOpen: false })}
    />
  );
};

export default MarketModal;
