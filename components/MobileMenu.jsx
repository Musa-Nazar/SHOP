import Link from "next/link";

function MobileMenu({ className }) {
  const xml = (
    <div
      className={
        "fixed w-full h-[calc(100dvh-6.4rem)] left-0 top-[6.4rem] bg-[#F0F0F0] transition-all duration-[0.3s] ease-linear flex flex-col  " +
        className
      }
    >
      <ul className="[&>li:not(:last-child)]:border-b-[rgba(0,0,0,.1)] [&>li:not(:last-child)]:border-b block opacity-0 skew-x-[45deg]">
        <li className="w-[80%] mx-auto p-[2rem] text-center">
          <Link
            href="/"
            className="satoshi-regular text-black text-[1.6rem] leading-[1.8rem]"
          >
            Home
          </Link>
        </li>
        <li className="w-[80%] mx-auto p-[2rem] text-center">
          <Link
            href="/shop"
            className="satoshi-regular text-black text-[1.6rem] leading-[1.8rem]"
          >
            Shop
          </Link>
        </li>
        <li className="w-[80%] mx-auto p-[2rem] text-center">
          <Link
            href="/onsale"
            className="satoshi-regular text-black text-[1.6rem] leading-[1.8rem]"
          >
            Onsale
          </Link>
        </li>
        <li className="w-[80%] mx-auto p-[2rem] text-center mt-auto">
          <Link
            href="/newarrival"
            className="satoshi-regular text-black text-[1.6rem] leading-[1.8rem]"
          >
            New Arrival
          </Link>
        </li>
      </ul>
      <footer className="mt-auto satoshi-regular text-[1.4rem] leading-[1.9rem] text-black/60 max-lg:text-center py-[2rem]">
        Shop.co © 2000-{new Date().getFullYear()}, All rights reserved
      </footer>
    </div>
  );
  return xml;
}

export default MobileMenu;
