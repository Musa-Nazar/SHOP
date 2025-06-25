import Link from "next/link";
import ScreenScale from "./ScreenScale";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const router = useRouter();
  console.log(router);
  // REDUX DATA
  const cartData = useSelector((state) => state.cartData);
  // NAVBAR STATE
  const [isMenuActive, setIsMenuActive] = useState(false);

  const noOfCartItems = cartData.reduce(
    (prevValue, currentValue) => (prevValue += currentValue.quantity),
    0
  );

  const [shadow, setShadow] = useState(false);
  // TOGGLE MENU
  function toggleMenu() {
    setIsMenuActive((prevState) => !prevState);
  }

  useEffect(() => {
    const addShadow = (e) => {
      if (window.innerWidth > 1024) {
        const hero = document.querySelector(".her");
        if (hero) {
          if (
            document.querySelector(".her").getBoundingClientRect().top !== 96
          ) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        }
      } else {
        const hero = document.querySelector(".her");
        if (hero) {
          if (
            document.querySelector(".her").getBoundingClientRect().top !== 64
          ) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        }
      }
    };
    window.addEventListener("scroll", addShadow);

    return () => {
      window.removeEventListener("scroll", addShadow);
    };
  }, []);

  const xml = (
    <header
      className={`min-h-[9.6rem] flex items-center justify-center py-[2.4rem] w-full sticky top-0 z-10 bg-white max-lg:min-h-[6.4rem] max-lg:py-[0] ${
        shadow ? "shadow" : ""
      }`}
    >
      <ScreenScale>
        <nav className="flex gap-[4rem] max-lg:gap-0 justify-between h-[4.8rem] max-lg:h-[unset]">
          <div className="flex gap-[4rem] items-center max-lg:gap-[1.6rem] max-lg:items-center">
            <button
              className="max-lg:flex hidden w-[2.4rem] h-[2.4rem] justify-center items-center px-[0.262rem]"
              onClick={toggleMenu}
            >
              <div
                className={
                  "w-full h-[0.3rem] rounded-[4rem] relative bg-black before:w-full before:h-[0.3rem] before:rounded-[4rem] before:bg-black before:absolute before:content-[''] before:top-[-.5rem] before:left-0 after:w-full after:h-[0.3rem] after:rounded-[4rem] after:bg-black after:absolute after:content-[''] after:top-[.5rem] after:left-0 before:transition-all before:duration-[0.4s] before:ease-linear after:transition-all after:duration-[0.4s] after:ease-linear " +
                  `${
                    isMenuActive
                      ? "bg-transparent before:translate-y-[0.5rem] after:translate-y-[-0.5rem] before:rotate-[45deg] after:rotate-[-45deg]"
                      : ""
                  }`
                }
              ></div>
            </button>
            <MobileMenu
              className={`${
                isMenuActive
                  ? "translate-x-[0] visible stop-scroll"
                  : "invisible translate-x-[-100vw]"
              }`}
            />
            <h1 className="text-[3.2rem] font-[700] leading-[3.8rem] integral-bold text-black relative max-lg:text-[2.52rem] max-lg:leading-[4rem]">
              SHOP.CO
              <Link
                className="absolute top-0 left-0 w-full h-full"
                href="/"
              ></Link>
            </h1>
            <ul className="flex items-center gap-[2.4rem] h-full max-lg:hidden">
              <li>
                <Link
                  href="/shop"
                  className="satoshi-regular text-[1.6rem] text-[#000]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="onsale"
                  className="satoshi-regular text-[1.6rem] whitespace-nowrap text-[#000]"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link
                  href="arrivals"
                  className="satoshi-regular text-[1.6rem] whitespace-nowrap text-[#000]"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="brand"
                  className="satoshi-regular text-[1.6rem] whitespace-nowrap text-[#000]"
                >
                  Brand
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex h-full items-center gap-[4rem]">
            <div className="input-holder w-[57.7rem] max-w-[40.04163775156142vw] h-full relative max-lg:hidden">
              <Image
                src="/assets/navsearchicon.png"
                className="absolute top-[1.2rem] left-[1.6rem]"
                width={24}
                alt="search"
                height={24}
              />
              <input
                type="search"
                name="search"
                className="w-full h-full rounded-[6.2rem] bg-[#F0F0F0] satoshi-regular text-[1.6rem] text-[rgba(0,0,0,.4)] pl-[5.2rem] outline-0"
                placeholder="Search for products..."
              />
            </div>
            <div className="flex gap-[1.588rem]">
              <div className="w-[4rem] aspect-square relative flex justify-center items-center border-[rgba(0,0,0,.1)] border rounded-[50%]">
                <Image
                  src="/assets/cart.svg"
                  alt="cart"
                  width={24}
                  height={24}
                />
                <span className="absolute w-[1.5rem] h-[1.5rem] text-center flex justify-center items-center text-[1rem] satoshi-regular text-white bg-black top-0 right-0 rounded-[50%] translate-x-[50%] ">
                  {noOfCartItems}
                </span>
                <Link
                  className="absolute top-0 left-0 w-full h-full"
                  href="/cart"
                ></Link>
              </div>

              <Image src="/assets/user.svg" alt="cart" width={24} height={24} />
            </div>
          </div>
        </nav>
      </ScreenScale>
    </header>
  );
  return xml;
}

export default Navbar;
