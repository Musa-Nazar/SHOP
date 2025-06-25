import Link from "next/link";
import ProductCard from "./ProductCard";
import ScreenScale from "./ScreenScale";

function ProductDisplay({
  heading,
  path = "",
  items,
  className = "",
  page = "Home",
}) {
  const renderedProducts = items.map((item, index) => (
    <ProductCard
      {...item}
      view={page !== "Home"}
      key={item.id}
      className={`${
        page !== "Home"
          ? "!flex-[0_0_calc((100%/3)-1.3333333333333334rem)] max-lg:!flex-[0_0_calc((100%/2)-.5rem)]"
          : ""
      }`}
    />
  ));

  const xml = (
    <section
      className={
        "pt-[7.2rem] pb-[6.4rem] max-lg:pt-[5rem] max-lg:text-[2rem] max-lg:pb-[4rem] " +
        className
      }
    >
      <h1
        className={`text-black ${
          page !== "Home"
            ? "satoshi-bold text-[3.2rem] leading-[4.3rem] font-bold mb-[1.6rem] max-lg:text-[2.4rem] max-lg:leading-[3.2rem] max-lg:pt-[1.2rem]"
            : "integral-bold font-bold text-[4.8rem] leading-[5.8rem] text-center text-[Black] mb-[5.5rem] max-lg:text-[3.2rem] max-lg:leading-[3.8rem]"
        }`}
      >
        {heading}
      </h1>
      {/* PRODUCTS */}
      <ScreenScale
        className={`mb-[3.6rem] ${
          page !== "Home" ? "!w-full !max-w-[unset]" : ""
        }`}
      >
        <div
          className={`flex gap-[2rem] select max-lg:overflow-scroll max-lg:gap-[1rem] hide ${
            page !== "Home" ? "flex-wrap" : ""
          }`}
        >
          {renderedProducts}
        </div>
      </ScreenScale>
      <ScreenScale>
        {page === "Home" && (
          <Link
            href={path}
            className="mx-auto text-center leading-[5rem] w-[21.8rem] h-[5.2rem] rounded-[6.2rem] border border-[rgba(0,0,0,.1)] block satoshi-500 font-[500] text-[1.6rem] text-black transition-all duration-[0.3s] ease-linear hover:bg-black hover:text-white max-lg:w-full"
          >
            View All
          </Link>
        )}
      </ScreenScale>
    </section>
  );
  return xml;
}

export default ProductDisplay;
