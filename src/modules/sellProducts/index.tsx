import { useEffect, useState } from "react";
import { ScrollShadow, Select, SelectItem } from "@nextui-org/react";

import { HeaderLayout } from "../../layout/header";
import PageLayout from "../../layout/private-layout";
import { getRequest } from "../../services/getRequest";
import useSellProductStore from "./store";
import ProductCards from "./container/ProductCards";
import useBaseStore from "../../store/base";
import { SvgIcon } from "../../components/ui/svgIcon";
import { CustomSearch } from "../../components/shared/Search/Search";
import { useDebounce } from "use-debounce";
import MarketModal from "./container/MarketModal";

const SellProduct = () => {
  const { refresh } = useBaseStore();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const {
    setBrandSelectData,
    brandSelectData,
    setProductData,
    setDrawer,
    selectBrandId,
    setSelectedBrandId,
  } = useSellProductStore();

  useEffect(() => {
    getRequest({
      path: "brands",
      setData: setBrandSelectData,
    });
    getRequest({
      path: `warehouse?product_name=${debouncedSearchTerm}`,
      setData: setProductData,
    });
  }, [debouncedSearchTerm, setBrandSelectData, setProductData, refresh]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <PageLayout
      header="Mahsulotlar ro'yxati"
      headerComponent={
        <div
          className="group bg-[#F5F7FA] p-3 rounded-full transition-all cursor-pointer hover:bg-[#e1e2ed]"
          onClick={() => setDrawer({ isOpen: true })}
        >
          <SvgIcon
            className="fill-[#718EBF] group-hover:fill-[#0070F0]"
            iconName="shopping-cart"
          />
        </div>
      }
    >
      <ScrollShadow className="pt-6 h-[90vh]" visibility="bottom" size={5}>
        <HeaderLayout
          content={
            <>
              <CustomSearch
                onSearch={handleSearch}
                placeholder="Mahsulot qidirish"
                className="max-w-xs"
              />
              <Select label="Select" className="max-w-xs">
                {brandSelectData?.map((item) => (
                  <SelectItem
                    key={item.id}
                    value={selectBrandId}
                    onClick={() => setSelectedBrandId(item.id)}
                  >
                    {item.brand_name}
                  </SelectItem>
                ))}
              </Select>
            </>
          }
          position="between"
        />
        <ProductCards />
        <MarketModal />
      </ScrollShadow>
    </PageLayout>
  );
};

export default SellProduct;
