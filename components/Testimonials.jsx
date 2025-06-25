import React, { useRef } from "react";
import ScreenScale from "./ScreenScale";
import { testimonials } from "@/data/data";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const slider = useRef();

  function moveRight() {
    slider.current.scrollBy({
      left: slider.current.firstElementChild.clientWidth + 21,
      behavior: "smooth",
    });
  }

  function moveLeft() {
    slider.current.scrollBy({
      left: -(slider.current.firstElementChild.clientWidth + 21),
      behavior: "smooth",
    });
  }

  const renderedTestimonies = testimonials.map((testimony, index) => (
    <TestimonialCard key={index} {...testimony} />
  ));

  const xml = (
    <section className="pt-[8rem] mb-[14.042rem] max-lg:mb-[20rem]">
      <ScreenScale className="flex justify-between items-end mb-[4rem]">
        <h1 className="font-bold integral-bold text-[4.8rem] leading-[5.8rem] text-black max-lg:text-[3.2rem] max-lg:leading-[3.6rem] ">
          <span className="max-lg:hidden">OUR HAPPY CUSTOMERS</span>
          <span className="hidden max-lg:block">
            OUR HAPPY
            <br /> CUSTOMERS
          </span>
        </h1>
        <div className="flex gap-[1.6rem]">
          <img
            src="/assets/arrow.png"
            alt="arrow"
            className="w-[2.4rem] aspect-square inline-block cursor-pointer"
            onClick={moveLeft}
          />
          <img
            src="/assets/arrow.png"
            alt="arrow"
            className="w-[2.4rem] aspect-square inline-block rotate-180 cursor-pointer"
            onClick={moveRight}
          />
        </div>
      </ScreenScale>
      <div className="w-[98vw] mx-auto relative px-[1rem] flex justify-center items-center max-lg:px-0 max-lg:w-[90%]">
        <div
          className="flex gap-[2rem] w-full overflow-x-scroll hide px-[calc((100%-124rem)/2)] transition-all duration-[0.7s] ease-linear"
          ref={slider}
        >
          {renderedTestimonies}
        </div>
        <div className="absolute backdrop-blur-[0.5rem] w-[calc((100%-124rem)/2)] h-full left-0 top-0 z-10"></div>
        <div className="absolute backdrop-blur-[0.5rem] w-[calc((100%-124rem)/2)] h-full right-0 top-0 z-10"></div>
      </div>
    </section>
  );
  return xml;
}

export default Testimonials;
