import ScreenScale from "./ScreenScale";

function BrowseSection() {
  const xml = (
    <ScreenScale className="rounded-[4rem] pt-[7rem] pb-[7.6rem] bg-[#F0F0F0] max-lg:pt-[4rem] max-lg:pb-[2.7rem] ">
      <h1 className="text-center integral-bold font-bold leading-[5.8rem] text-[4.8rem] text-black mb-[6.4rem] max-lg:text-[3.2rem] max-lg:leading-[3.6rem] px-[2rem]">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex w-full max-lg:flex-col max-lg:flex-nowrap max-lg:justify-start px-[6.4rem] flex-wrap gap-[2rem] max-lg:px-[2rem] select">
        <div className="flex-[0_0_36.60071942446043%] max-lg:flex-[auto] max-lg:w-full h-[28.9rem] bg-white rounded-[2rem] overflow-hidden max-lg:h-[20rem]">
          <img
            src="/assets/browse-1.jpg"
            alt=""
            className="block w-full h-full object-fill"
          />
        </div>
        <div className="flex-[0_0_calc(100%-36.60071942446043%-2rem)] max-lg:flex-[auto] max-lg:w-full h-[28.9rem] bg-white rounded-[2rem] overflow-hidden max-lg:h-[20rem]">
          <img
            src="/assets/browse-2.jpg"
            alt=""
            className="block w-full h-full object-fill"
          />
        </div>
        <div className="flex-[0_0_calc(100%-36.60071942446043%-2rem)] max-lg:flex-[auto] max-lg:w-full h-[28.9rem] bg-white rounded-[2rem] overflow-hidden max-lg:h-[20rem]">
          <img
            src="/assets/browse-3.png"
            alt=""
            className="block w-full h-full object-fill"
          />
        </div>
        <div className="flex-[0_0_36.60071942446043%] max-lg:flex-[auto] max-lg:w-full h-[28.9rem] bg-white rounded-[2rem] overflow-hidden max-lg:h-[20rem]">
          <img
            src="/assets/browse-4.jpg"
            alt=""
            className="block w-full h-full object-fill"
          />
        </div>
      </div>
    </ScreenScale>
  );
  return xml;
}

export default BrowseSection;
