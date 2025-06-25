import { cartActions } from "@/store/store";
import { useDispatch } from "react-redux";

function CartItem({
  img,
  title,
  size,
  quantity,
  priceSumTotal,
  color,
  price,
  id,
}) {
  const dispatch = useDispatch();
  const { addToCart, removeSingleCartItem, deleteItemFromCart } = cartActions;

  function addCartItemQuantity() {
    dispatch(
      addToCart({ img, title, size, quantity, priceSumTotal, color, id, price })
    );
  }
  function reduceCartItemQuantity() {
    dispatch(
      removeSingleCartItem({
        quantity,
        priceSumTotal,
        id,
        price,
      })
    );
  }
  function deleteCartItem() {
    dispatch(deleteItemFromCart({ quantity, priceSumTotal, id, price }));
  }

  const xml = (
    <article className="flex gap-[1.6rem] max-lg:gap-[1.4rem]">
      <img
        src={img}
        alt="cartItem"
        className="w-[12.4rem] aspect-square max-lg:w-[10rem] object-fill"
      />
      <section className="flex-[1_0_0]">
        <div className="flex justify-between mb-[0.2rem]">
          <h1 className="satoshi-bold font-bold text-[2rem] leading-[2.7rem] text-black max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            {title}
          </h1>
          <img
            src="/assets/trash.png"
            alt="trash"
            className="w-[2.4rem] aspect-square cursor-pointer mr-[0.5rem] mt-[0.2rem] max-lg:w-[2rem]"
            onClick={deleteCartItem}
          />
        </div>
        <p className="text-[1.4rem] leading-[1.9rem] satoshi-regular text-black mb-[0.4rem] max-lg:text-[1.2rem] max-lg:leading-[1.6rem]">
          Size: <span className="text-black/60">{size}</span>
        </p>
        <p className="text-[1.4rem] leading-[1.9rem] satoshi-regular text-black mb-[1rem] max-lg:text-[1.2rem] max-lg:leading-[1.6rem]">
          Color: <span className="text-black/60">{color}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-black text-[2.4rem] leading-[3.2rem] satoshi-bold font-bold max-lg:text-[2rem] max-lg:leading-[2.7rem]">
            ${priceSumTotal}
          </p>
          <div className="flex gap-[2rem] py-[1.2rem] px-[2rem] bg-[#F0F0F0] rounded-[6.2rem] items-center">
            <img
              src="/assets/minus.png"
              alt=""
              className="w-[2rem] aspect-square cursor-pointer max-lg:w-[1.6rem]"
              onClick={reduceCartItemQuantity}
            />
            <input
              type="number"
              className="w-[2.4rem] no-btn text-[1.6rem] text-black leading-[1.2rem] satoshi-500 font-[500] text-center max-lg:text-[1.4rem]"
              defaultValue={quantity}
            />
            <img
              src="/assets/plus.png"
              alt=""
              className="w-[2rem] aspect-square cursor-pointer max-lg:w-[1.6rem]"
              onClick={addCartItemQuantity}
            />
          </div>
        </div>
      </section>
    </article>
  );
  return xml;
}

export default CartItem;
