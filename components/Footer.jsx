import Line from "./Line";
import NewsLetterPreview from "./NewsLetterPreview";
import ScreenScale from "./ScreenScale";

function Footer() {
  const xml = (
    <footer className="bg-[#F0F0F0] pb-[5rem]">
      <NewsLetterPreview />
      <ScreenScale className="flex justify-between mt-[-4rem] mb-[5rem] max-lg:flex-wrap max-lg:gap-y-[2.4rem] max-lg:gap-x-[1.5rem] max-lg:mt-[-10rem]">
        {/* TILE 1 */}
        <div className="max-lg:w-full max-lg:shrink-0">
          <h1 className="integral-bold leading-[4rem] text-[3.34545rem] font-bold text-black mb-[2.5rem] max-lg:mb-[1.4rem]">
            SHOP.CO
          </h1>
          <p className="satoshi-regular text-[1.4rem] leading-[2.2rem] text-black/60 mb-[3.5rem] max-lg:mb-[2rem]">
            <span className="max-lg:hidden">
              We have clothes that suits your style and
              <br /> which you’re proud to wear. From
              <br /> women to men.
            </span>
            <span className="hidden max-lg:inline">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </span>
          </p>
          <div className="flex gap-[1.2rem]">
            <div className="w-[2.8rem] aspect-square rounded-[50%] bg-white flex justify-center items-center relative">
              <img src="/assets/twitter.jpg" alt="twitter" />
              <a
                href="http://www.x.com"
                className="absolute w-full h-full block"
              ></a>
            </div>
            <div className="w-[2.8rem] aspect-square rounded-[50%] bg-black flex justify-center items-center relative">
              <img src="/assets/facebook.png" alt="facebook" />
              <a
                href="http://www.facebook.com"
                className="absolute w-full h-full block"
              ></a>
            </div>
            <div className="w-[2.8rem] aspect-square rounded-[50%] bg-white flex justify-center items-center relative">
              <img src="/assets/instagram.png" alt="facebook" />
              <a
                href="http://www.instagram.com"
                className="absolute w-full h-full block"
              ></a>
            </div>
          </div>
        </div>
        {/* TILE 2 */}
        <div>
          <h2 className="satoshi-500 font-[500] text-[1.6rem] leading-[1.8rem] text-black mb-[2.6rem] uppercase">
            Company
          </h2>
          <ul className="leading-[1.9rem] text-[1.6rem] satoshi-regular text-black/60 justify-between flex-col flex gap-[2rem]">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        {/* TILE 3 */}
        <div>
          <h2 className="satoshi-500 font-[500] text-[1.6rem] leading-[1.8rem] text-black mb-[2.6rem] uppercase">
            HELP
          </h2>
          <ul className="leading-[1.9rem] text-[1.6rem] satoshi-regular text-black/60 justify-between flex-col flex gap-[2rem]">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* TILE 4 */}
        <div>
          <h2 className="satoshi-500 font-[500] text-[1.6rem] leading-[1.8rem] text-black mb-[2.6rem] uppercase">
            FAQ
          </h2>
          <ul className="leading-[1.9rem] text-[1.6rem] satoshi-regular text-black/60 justify-between flex-col flex gap-[2rem]">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        {/* TILE 5 */}
        <div>
          <h2 className="satoshi-500 font-[500] text-[1.6rem] leading-[1.8rem] text-black mb-[2.6rem] uppercase">
            Resources
          </h2>
          <ul className="leading-[1.9rem] text-[1.6rem] satoshi-regular text-black/60 justify-between flex-col flex gap-[2rem]">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </ScreenScale>
      <Line />
      <div className="mb-[2.5rem]"></div>
      <ScreenScale className="">
        <p className="satoshi-regular text-[1.4rem] leading-[1.9rem] text-black/60 max-lg:text-center">
          Shop.co © 2000-{new Date().getFullYear()}, All rights reserved
        </p>
      </ScreenScale>
    </footer>
  );
  return xml;
}

export default Footer;
