import CustomModal from "../../../components/common/Modal/Modal";
import { ProductModal } from "../components/ProductModal/ProductModal";
import useSellProductStore from "../store";

const MarketModal = () => {
  const { drawer, setDrawer } = useSellProductStore();

  return (
    <CustomModal
      size="full"
      isOpen={drawer?.isOpen}
      modalHeaderTitle="Xarid qilish oynasi"
      modalBodyChildren={<ProductModal />}
      modalFooterChildren={<></>}
      setIsOpen={() => setDrawer({ isOpen: false })}
    />
  );
};

export default MarketModal;
