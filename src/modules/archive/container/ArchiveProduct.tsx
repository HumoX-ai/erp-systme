import { HeaderLayout } from "../../../layout/header";
import { ArchiveProductTable } from "../components/ArchiveProductTable";

const ArchiveProduct = () => {
  return (
    <div>
      <HeaderLayout
        headerTitle="Arxiv bo'limida mavjud mahsulotlar"
        position="start"
      />

      <ArchiveProductTable />
    </div>
  );
};

export default ArchiveProduct;
