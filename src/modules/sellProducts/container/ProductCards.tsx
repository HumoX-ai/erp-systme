import { useMemo, useState } from "react";

import { Pagination } from "@nextui-org/react";
import useSellProductStore from "../store";
import { WareHouseDataTypes } from "../../warehouse/types";
import { CustomLoading } from "../../../components";
import useBaseStore from "../../../store/base";
import { SellProductCards } from "../components/SellProducts/SellProductCards";

const ProductCards = () => {
  const { productData } = useSellProductStore();
  const { refresh } = useBaseStore();

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(productData?.length / rowsPerPage);

  const products: WareHouseDataTypes[] = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return productData?.slice(start, end);
  }, [page, productData]);

  return (
    <CustomLoading loading={refresh}>
      <div className="flex flex-col gap-10">
        <ul className="grid grid-cols-3 gap-5">
          {products?.map((items) => {
            return <SellProductCards {...items} />;
          })}
        </ul>

        {products?.length ? (
          <div className="flex items-center justify-end">
            <Pagination
              initialPage={1}
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </CustomLoading>
  );
};

export default ProductCards;
