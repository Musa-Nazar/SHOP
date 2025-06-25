import React from "react";

function TestimonialCard({ name, ratings, testimony }) {
  function Stars(ratings) {
    let rates = [];
    for (let i = 0; i < ratings; i++)
      rates.push(
        <img
          src="/assets/star-rate.png"
          alt="stars"
          className="w-[2.258rem] aspect-square flex-none"
        />
      );
    return rates;
  }

  const xml = (
    <div className="w-[40rem] min-h-[24rem] rounded-[2rem] border-[rgba(0,0,0,.1)] py-[2.8rem] border px-[3.2rem] flex-none max-lg:w-full">
      <div className="flex gap-[0.649rem] mb-[1.5rem]">{Stars(ratings)}</div>
      <p className="flex gap-[0.4rem] mb-[1.2rem] items-center ">
        <span className="leading-[2.2rem] text-[2rem] font-bold satoshi-bold text-black">
          {name}
        </span>
        <img
          src="/assets/green-tick.svg"
          alt="tick"
          className="w-[1.904rem] h-[1.902rem] block"
        />
      </p>
      <p className="satoshi-regular text-[1.6rem] text-black/60 leading-[2.2rem]">
        "{testimony}"
      </p>
    </div>
  );
  return xml;
}

export default TestimonialCard;
