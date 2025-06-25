import Image from "next/image";
import ScreenScale from "./ScreenScale";
import Line from "./Line";
import FilterSideMenu from "./FilterSideMenu";
import ProductDisplay from "./ProductDisplay";
import data, { data1 } from "@/data/data";

function ShopProductDisplay() {
  const myData = data.concat(data1);

  const xml = (
    <ScreenScale className="flex items-start gap-[2rem] mb-[8rem] max-lg:mb-[18rem]">
      <FilterSideMenu />
      <ProductDisplay
        items={myData}
        heading="Shop"
        page="shop"
        className="!pt-0 w-[calc(100%-31.5rem)] max-lg:w-full"
      />
    </ScreenScale>
  );
  return xml;
}

export default ShopProductDisplay;
