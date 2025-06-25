import { useSelector } from "react-redux";
import Line from "./Line";
import NewsletterInput from "./NewsletterInput";

function CartOrderSection() {
  const totalAmount = useSelector((state) => state.totalAmount);
  const discount = useSelector((state) => state.discountedPercentage);
  const xml = (
    <aside className="w-[clamp(1rem,calc((100%-57.66129032258065%)-2rem),50.5rem)] py-[2rem] px-[2.4rem] border border-black/10 rounded-[2rem] max-lg:w-full max-lg:p-[2rem]">
      <h3 className="satoshi-bold font-bold text-[2.4rem] leading-[3.2rem] text-black mb-[2.4rem] max-lg:text-[2rem] max-lg:leading-[2.7rem] max-lg:mb-[1.6rem]">
        Order Summary
      </h3>
      <ul className="flex flex-col gap-[2rem] mb-[2rem]">
        <li className="flex justify-between">
          <span className="satoshi-regular text-[2rem] leading-[2.7rem] text-black/60 max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            Subtotal
          </span>
          <span className="satoshi-regular font-bold text-black text-[2rem] leading-[2.7rem] text-right max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            ${totalAmount}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="satoshi-regular text-[2rem] leading-[2.7rem] text-black/60 max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            Discount
          </span>
          <span className="satoshi-regular font-bold text-[#FF3333] text-[2rem] leading-[2.7rem] text-right max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            -{parseFloat(discount).toFixed(2)}%
          </span>
        </li>
        <li className="flex justify-between">
          <span className="satoshi-regular text-[2rem] leading-[2.7rem] text-black/60 max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            Delivery Fee
          </span>
          <span className="satoshi-regular font-bold text-black text-[2rem] leading-[2.7rem] text-right max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
            ${(totalAmount * (15 / 100)).toFixed(2)}
          </span>
        </li>
      </ul>
      <Line not={true} />
      <div className="mb-[2rem]"></div>
      <div className="flex justify-between items-center mb-[2.4rem] max-lg:mb-[1.6rem]">
        <h5 className="text-[2rem] leading-[2.7rem] text-black satoshi-regular max-lg:text-[1.6rem] max-lg:leading-[2.2rem]">
          Total
        </h5>
        <h5 className="text-[2.4rem] satoshi-bold font-bold leading-[3.2rem] text-black max-lg:text-[2rem] max-lg:leading-[2.7rem]">
          ${totalAmount}
        </h5>
      </div>
      <form className="flex gap-[1.2rem] mb-[2.4rem]">
        <NewsletterInput
          className="[&>input]:bg-[#f0f0f0] [&>img]:w-[2.4rem] [&>img]:h-[2.4rem] [&>img]:top-[50%] [&>img]:translate-y-[-50%] flex-[1_0_0]"
          imgsrc="/assets/ticket.png"
          type="text"
          placeholder="Add Promo Code"
        />
        <button className="rounded-[6.2rem] px-[1.6rem] w-[11.9rem] bg-black text-white satoshi-500 font-[500] leading-[2.2rem] text-[1.6rem]">
          Apply
        </button>
      </form>
      {/* ORDER FORM */}
      <form>
        <button className="rounded-[6.2rem] satoshi-500 font-[500] block w-full bg-black py-[1.9rem] text-[1.6rem] max-lg:text-[1.4rem] max-lg:py-[1.75rem] max-lg:leading-[1.9rem]">
          Order
        </button>
      </form>
    </aside>
  );
  return xml;
}

export default CartOrderSection;
