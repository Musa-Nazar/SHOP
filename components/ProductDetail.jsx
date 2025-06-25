import data, { data1 } from "@/data/data";
import ScreenScale from "./ScreenScale";
import Line from "./Line";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderedRating } from "@/uitls/renderedRatings";
import { cartActions } from "@/store/store";
import ColorSelector from "./colorSelector";
import SizeIcons from "./SizeIcons";

function ProductDetail({ id }) {
  // STATES
  const [itemAmmount, setItemAmmount] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  //REDUX SELECTORS
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const { addToCart: addToCartAction } = cartActions;

  // INPUT CONTROLLERS
  function incrementInputValue() {
    setItemAmmount((prevState) => parseInt(prevState) + 1);
  }

  function decrementInputValue() {
    setItemAmmount((prevState) => {
      if (prevState !== 0) return parseInt(prevState) - 1;
      return prevState;
    });
  }

  function setInputValue({ target }) {
    setItemAmmount(target.value);
  }

  // ADD TO CART
  function addToCart(e) {
    e.preventDefault();
    if (itemAmmount === 0) return;
    dispatch(
      addToCartAction({
        ...SpecificProduct,
        color: color,
        size: size,
        quantity: itemAmmount,
        priceSumTotal: SpecificProduct.price * itemAmmount,
      })
    );
  }

  // COLOR HANDLER
  function colorHandler(boxColor) {
    setColor(boxColor);
  }

  // SIZE HANDLER
  function sizeHandler(customSize) {
    setSize(customSize);
  }

  const myData = data.concat(data1);
  const SpecificProduct = myData.find((item) => item.id.toString() === id);

  const xml = (
    <ScreenScale className="mb-[18rem] flex gap-[4rem] max-lg:flex-col">
      <div className="flex gap-[1.4rem] shrink-0 max-lg:flex-col-reverse max-lg:mt-[1rem]">
        <div className="flex-col flex gap-[1.4rem] max-lg:flex-row">
          <img
            src={SpecificProduct.img}
            alt=""
            className="block w-[15.2rem] h-[16.7rem] rounded-[2rem] max-lg:w-[calc((100%/3)-0.9333333333333333rem)]"
          />
          <img
            src={SpecificProduct.img}
            alt=""
            className="block w-[15.2rem] h-[16.7rem] rounded-[2rem] max-lg:w-[calc((100%/3)-0.9333333333333333rem)]"
          />
          <img
            src={SpecificProduct.img}
            alt=""
            className="block w-[15.2rem] h-[16.7rem] rounded-[2rem] max-lg:w-[calc((100%/3)-0.9333333333333333rem)]"
          />
        </div>
        <div className="w-[44.4rem] max-lg:w-full">
          <img
            src={SpecificProduct.img}
            alt=""
            className="block w-full h-[53rem] rounded-[2rem]"
          />
        </div>
      </div>
      <div className="w-full shrink">
        <h1 className="integral-bold font-bold text-[4rem] leading-[4.8rem] text-black mb-[1.4rem] max-lg:text-[2.4rem] max-lg:leading-[2.8rem] max-lg:mb-[1.2rem]">
          {SpecificProduct.title}
        </h1>
        <div className="flex gap-[1.6rem] mb-[1.5rem]">
          <div className="flex max-lg:gap-[0.5rem] gap-[0.7rem]">
            {renderedRating(SpecificProduct.rating)}
          </div>
          <p className="text-black text-[1.6rem] leading-[2.2rem] satoshi-regular max-lg:text-[1.2rem] max-lg:leading-[1.9rem]">
            {SpecificProduct.rating}/<span className="text-black/40">5</span>
          </p>
        </div>
        <div className="flex gap-[1.3rem] mb-[2rem] max-lg:mb-[1.2rem]">
          <p className="price text-[3.2rem] text-black satoshi-bold font-bold leading-[4.3rem] max-lg:text-[2.4rem] max-lg:leading-[3.2rem]">
            ${SpecificProduct.price}
          </p>
          <p className="original-Price text-[3.2rem] text-black/40 line-through satoshi-bold font-bold leading-[4.3rem] max-lg:text-[2.4rem] max-lg:leading-[3.2rem]">
            {SpecificProduct.originalPrice && <>$</>}
            {SpecificProduct.originalPrice}
          </p>
          {SpecificProduct.discountPercentage && (
            <p className="original-Price min-w-[5.8rem] bg-[rgba(255,51,51,0.1)] rounded-[6.2rem] text-[#FF3333] flex justify-center items-center leading-[1.6rem] text-[1.2rem] satoshi-500 font-[500] max-lg:text-[1.4rem] max-lg:leading-[1.9rem] max-lg:px-[1rem]">
              -{SpecificProduct.discountPercentage}
              {SpecificProduct.discountPercentage ? "%" : ""}
            </p>
          )}
        </div>
        {/* TILE 3 */}
        <p className="satoshi-regular leading-[2.2rem] text-black/60 text-[1.6rem] mb-[2.5rem] max-lg:text-[1.4rem] max-lg:leading-[2rem] max-lg:mb-[2rem]">
          {SpecificProduct.desc}
        </p>
        <Line not={true} />
        {/* TILE 4 */}
        <div className="pt-[2.4rem]">
          <h5 className="satoshi-regular text-[1.6rem] leading-[2.2rem] text-black/60 mb-[1.6rem]">
            Select Colors
          </h5>
          <div className="flex gap-[1.6rem] mb-[2.4rem] max-lg:gap-[1.23rem]">
            <ColorSelector
              color="green"
              selectedColor={color}
              colorHandler={colorHandler}
            />
            <ColorSelector
              color="red"
              selectedColor={color}
              colorHandler={colorHandler}
            />
            <ColorSelector
              color="blue"
              selectedColor={color}
              colorHandler={colorHandler}
            />
          </div>
        </div>
        <Line not={true} />
        {/* TILE 5 */}
        <div className="pt-[2.4rem]">
          <h5 className="satoshi-regular text-[1.6rem] leading-[2.2rem] text-black/60 mb-[1.6rem]">
            Choose Size
          </h5>
          <div className="flex gap-[1.6rem] mb-[2.4rem] max-lg:gap-[0.8rem] flex-wrap">
            <SizeIcons
              size="Small"
              sizeHandler={sizeHandler}
              selecetedSize={size}
            />
            <SizeIcons
              size="Medium"
              sizeHandler={sizeHandler}
              selecetedSize={size}
            />
            <SizeIcons
              size="Large"
              sizeHandler={sizeHandler}
              selecetedSize={size}
            />
            <SizeIcons
              size="X-Large"
              sizeHandler={sizeHandler}
              selecetedSize={size}
            />
          </div>
        </div>
        <Line not={true} />
        {/* TILE 6 */}
        <div className="pt-[2.4rem]">
          <form className="flex gap-[2rem]" onSubmit={addToCart}>
            <div className="flex bg-[#F0F0F0] rounded-[6.2rem] py-[1.6rem] px-[2rem] items-center gap-[3.8rem] max-lg:gap-[1.6rem]">
              <img
                src="/assets/minus.png"
                alt=""
                className="w-[2.4rem] aspect-square inline-block"
                onClick={decrementInputValue}
              />
              <input
                type="number"
                name="item-ammount"
                id="item-ammount"
                className="text-[1.6rem] text-black leading-[1.2rem] satoshi-500 font-[500] h-[2.4rem] text-center grow-0 max-w-[2.4rem] outline-0 no-btn inline-block"
                onChange={setInputValue}
                value={itemAmmount}
              />
              <img
                src="/assets/plus.png"
                alt=""
                className="w-[2.4rem] aspect-square inline-block"
                onClick={incrementInputValue}
              />
            </div>
            <button className="flex-[1_0_0] rounded-[6.2rem] bg-black text-white text-[1.6rem] leading-[2.2rem] satoshi-500 font-[500]">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </ScreenScale>
  );
  return xml;
}

export default ProductDetail;
