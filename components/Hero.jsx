import Link from "next/link";
import ScreenScale from "./ScreenScale";
import HeroTags from "./HeroTags";
import Image from "next/image";

function Hero() {
  const xml = (
    <section className="min-h-[66.3rem] hero her relative max-lg:min-h-[85.3rem]">
      <ScreenScale className="flex  max-lg:flex-col">
        <div className="flex-[0_0_57.7rem] max-lg:flex-[1_0_0] pt-[10.3rem] max-lg:pt-[4rem] max-lg:pb-[40.1rem]">
          <h1 className="integral-bold text-[6.4rem] font-bold leading-[6.4rem] text-black max-lg:text-[3.6rem] max-lg:leading-[3.4rem]">
            FIND CLOTHES
            <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="satoshi-regular leading-[2.2rem] text-black/60 text-[1.6rem] font-normal mt-[3.2rem] max-lg:text-[1.4rem] max-lg:leading-[2.4rem] max-lg:mt-[2rem]">
            <span className="max-lg:hidden">
              Browse through our diverse range of meticulously crafted garments,
              designed
              <br />
              to bring out your individuality and cater to your sense of style.
            </span>
            <span className="hidden max-lg:block">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
          </p>
          <Link
            href="/shop"
            className="w-[21rem] h-[5.2rem] bg-black inline-block text-center leading-[5.2rem] rounded-[6.2rem] satoshi-regular font-[500] text-white text-[1.6rem] mt-[3.2rem] hover-black max-lg:mt-[2.4rem] max-lg:w-full"
          >
            Show Now
          </Link>
          <div className="mt-[3.2rem] max-lg:mt-[2rem] flex gap-[3.2rem] max-lg:hidden">
            <HeroTags number="200" text="International Brands" />
            <HeroTags number="2,000" text="High-Quality Products" />
            <HeroTags number="30,000" text="Happy Customers" />
          </div>
          <div className="mt-[3.2rem] max-lg:mt-[2rem] gap-[3.2rem] hidden max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:gap-[1.4rem] max-lg:items-center">
            <div className="flex gap-[2.75rem]">
              <HeroTags number="200" text="International Brands" />
              <div className="w-[0.1rem] bg-[rgba(0,0,0,.1)]"></div>
              <HeroTags number="2,000" text="High-Quality Products" />
            </div>
            <HeroTags number="30,000" text="Happy Customers" />
          </div>
        </div>
      </ScreenScale>
      <Image
        src="/assets/Star.png"
        width={104}
        height={104}
        alt="star"
        className="absolute right-[clamp(4rem,5.621096460791118vw,8.1rem)] top-[8.6rem] max-lg:hidden"
      />
      <Image
        src="/assets/Star.png"
        width={56}
        height={56}
        alt="star"
        className="absolute right-[63.4rem] top-[29.7em] max-lg:hidden"
      />
    </section>
  );
  return xml;
}

export default Hero;
