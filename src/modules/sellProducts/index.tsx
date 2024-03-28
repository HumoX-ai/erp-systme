import { useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import { CustomSearch } from "../../components/shared/Search/Search";
import { HeaderLayout } from "../../layout/header";
import PageLayout from "../../layout/private-layout";
import { getRequest } from "../../services/getRequest";
import useSellProductStore from "./store";
import ProductCards from "./container/ProductCards";
import useBaseStore from "../../store/base";
import { SvgIcon } from "../../components/ui/svgIcon";
import MarketModal from "./container/MarketModal";

const SellProduct = () => {
  const { refresh } = useBaseStore();
  const { setBrandSelectData, brandSelectData, setProductData, setDrawer } =
    useSellProductStore();

  useEffect(() => {
    getRequest({
      path: "brands",
      setData: setBrandSelectData,
    });
    getRequest({
      path: "warehouse",
      setData: setProductData,
    });
  }, [setBrandSelectData, setProductData, refresh]);

  return (
    <PageLayout
      header="Mahsulotlar ro’yxati"
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
      <HeaderLayout
        content={
          <>
            <CustomSearch
              size="md"
              className="w-1/6"
              placeholder="Qidirish..."
            />
            <Autocomplete
              defaultItems={brandSelectData?.map((items) => ({
                value: items?.id,
                label: items?.brand_name,
              }))}
              placeholder="Filter"
              className="max-w-xs"
              variant="faded"
              size="md"
            >
              {(item) => (
                <AutocompleteItem key={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>
          </>
        }
        position="between"
      />
      <ProductCards />
      <MarketModal />
    </PageLayout>
  );
};

export default SellProduct;
