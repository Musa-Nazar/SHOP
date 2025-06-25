import Link from "next/link";

function ProductCard({
  img,
  title,
  rating,
  price,
  originalPrice,
  discountPercentage,
  className,
  view = false,
  id = 0,
}) {
  const renderedRating = (rates = rating) => {
    let renderedRates = [],
      isRateDecimal = rates % 1;

    for (let i = 0; i < parseInt(rates); i++)
      renderedRates.push(
        <img
          src="/assets/star-rate.png"
          alt="stars"
          className="block w-[1.9rem] aspect-square max-lg:w-[1.6rem]"
          loading="lazy"
        />
      );

    if (isRateDecimal)
      renderedRates.push(
        <img
          src="/assets/star-rate-half.jpg"
          alt="stars"
          className="block w-[calc(1.9rem/2)] max-lg:w-[calc(1.6rem/2)] h-[1.9rem] max-lg:h-[1.6rem]"
          loading="lazy"
        />
      );

    return renderedRates;
  };

  const xml = (
    <div
      className={
        "flex-[1_0_0] relative overflow-hidden max-lg:flex-[0_0_19.8rem] " +
        className
      }
    >
      <img
        src={img}
        alt="product"
        className="rounded-[2rem] h-[29.8rem] block w-full"
        loading="lazy"
      />
      <div className="pt-[1.8rem] max-lg:pt-[1rem]">
        <h2 className="mb-[0.8rem] satoshi-bold font-bold text-[2rem] leading-[2.7rem] text-black t-transform max-lg:text-[1.6rem] max-lg:leading-[2.2rem] max-lg:mb-0">
          {title}
        </h2>
        <div className="flex gap-[1.3rem] mb-[0.8rem] max-lg:[0.5rem]">
          <div className="flex max-lg:items-center">{renderedRating()}</div>
          <p className="text-black text-[1.4rem] leading-[1.9rem] satoshi-regular max-lg:text-[1.2rem] max-lg:leading-[1.6rem] ">
            {rating}/<span className="text-black/40">5</span>
          </p>
        </div>
        <div className="flex gap-[1.3rem] max-lg:gap-[.7rem] flex-wrap">
          <p className="price text-[2.4rem] text-black satoshi-bold font-bold leading-[3.2rem] max-lg:text-[2rem] max-lg:leading-[2.7rem]">
            ${price}
          </p>
          <p className="original-Price text-[2.4rem] text-black/40 line-through satoshi-bold font-bold leading-[3.2rem] max-lg:text-[2rem] max-lg:leading-[2.7rem]">
            {originalPrice && <>$</>}
            {originalPrice}
          </p>
          {discountPercentage && (
            <p className="original-Price min-w-[5.8rem] bg-[rgba(255,51,51,0.1)] rounded-[6.2rem] text-[#FF3333] flex justify-center items-center leading-[1.6rem] text-[1.2rem] satoshi-500 font-[500] max-lg:py-[0.3rem]">
              -{discountPercentage}
              {discountPercentage ? "%" : ""}
            </p>
          )}
        </div>
      </div>
      {view && (
        <Link
          className="absolute w-full h-full z-[2] top-0 left-0 flex flex-col group"
          href={`/shop/${id.toString()}`}
        >
          <div className="w-full h-[29.8rem] rounded-[2rem] opacity-0 flex justify-center items-center group-hover:bg-black/50 group-hover:opacity-[1] transition-all duration-[0.7s] ease-linear">
            <span className="satoshi-regular text-[1.6rem] text-white">
              Click To View
            </span>
          </div>
        </Link>
      )}
    </div>
  );
  return xml;
}

export default ProductCard;
