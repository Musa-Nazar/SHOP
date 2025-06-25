import NewsletterInput from "./NewsletterInput";
import ScreenScale from "./ScreenScale";

function NewsLetterPreview() {
  const xml = (
    <ScreenScale className="translate-y-[-50%] rounded-[2rem] py-[3.6rem] px-[6.4rem] bg-black text-white flex justify-between max-lg:flex-col max-lg:py-[3.2rem] max-lg:px-[2.4rem] max-lg:gap-[3.2rem]">
      <h1 className="integral-bold font-bold text-[4rem] leading-[4.5rem] text-white max-lg:text-[3.2rem] max-lg:leading-[3.5rem]">
        <span className="max-lg:hidden">
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </span>
        <span className="hidden max-lg:inline">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </span>
      </h1>
      <div className="flex flex-col justify-between gap-[1.4rem]">
        <NewsletterInput imgsrc="/assets/envelope.svg" />
        <button className="w-[34.9rem] h-[4.6rem] bg-white rounded-[6.2rem] text-black text-[1.6rem] font-[500] satoshi-500 hover-white hover:border hover:border-white cursor-pointer max-lg:w-full">
          Subscribe to Newsletter
        </button>
      </div>
    </ScreenScale>
  );
  return xml;
}

export default NewsLetterPreview;
