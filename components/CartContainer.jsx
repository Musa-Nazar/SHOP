import React from "react";
import ScreenScale from "./ScreenScale";
import NavDirection from "./NavDirection";
import Line from "./Line";
import NewsletterInput from "./NewsletterInput";
import CartOrderSection from "./CartOrderSection";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartContainer() {
  const cartData = useSelector((state) => state.cartData);

  function renderedCartData() {
    let renderedItems = [];
    if (cartData.length === 1) {
      renderedItems.push(<CartItem {...cartData[0]} key={Math.random()} />);
    } else {
      renderedItems = cartData.map((item, index) => {
        if (index === 0) {
          return <CartItem key={Math.random()} {...item} />;
        }
        return (
          <>
            <Line not={true} />
            <CartItem key={Math.random()} {...item} />
          </>
        );
      });
    }
    return renderedItems;
  }
  const xml = (
    <ScreenScale className="mb-[18rem]">
      <h1 className="my-[2.4rem] text-black integral-bold font-bold text-[4rem] leading-[4.8rem] max-lg:text-[3.2rem] max-lg:leading-[3.8rem] max-lg:mb-[2rem] max-lg:mt-[0.8rem]">
        YOUR CART
      </h1>
      <section className="flex gap-[2rem] items-start max-lg:flex-col">
        <main className="w-[clamp(1rem,57.66129032258065%,71.5rem)] max-lg:w-full border border-black/10 rounded-[2rem] py-[2rem] px-[2.4rem] overflow-auto flex flex-col gap-[2.4rem] min-h-[45rem] max-lg:p-[1.4rem] max-lg:gap-[1.6rem]">
          {renderedCartData().length !== 0 ? (
            renderedCartData()
          ) : (
            <p className="satoshi-regular text-black text-[1.6rem] w-full h-[calc(45rem-4rem)] flex justify-center items-center">
              No Item in Cart
            </p>
          )}
        </main>
        <CartOrderSection />
      </section>
    </ScreenScale>
  );
  return xml;
}

export default CartContainer;
