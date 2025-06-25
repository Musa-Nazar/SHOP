import ScreenScale from "./ScreenScale";

function Showcase() {
  const xml = (
    <>
      <div className="max-lg:hidden h-[12.2rem] bg-black">
        <ScreenScale className="flex justify-between items-center h-full ">
          <img src="/assets/Show-1.png" alt="showcase" />
          <img src="/assets/Show-2.png" alt="showcase" />
          <img src="/assets/Show-3.png" alt="showcase" />
          <img src="/assets/Show-4.png" alt="showcase" />
          <img src="/assets/Show-5.png" alt="showcase" />
        </ScreenScale>
      </div>
      <div className="max-lg:block hidden max-lg:min-h-[12.2rem] max-lg:h-[unset] h-[12.2rem] bg-black">
        <ScreenScale className="flex justify-between max-lg:justify-center max-lg:gap-[2rem] items-center max-lg:flex-wrap max-lg:py-[4rem]">
          <img src="/assets/Show-1.png" alt="showcase" className="h-[2.4rem]" />
          <img src="/assets/Show-2.png" alt="showcase" className="h-[2.7rem]" />
          <img src="/assets/Show-3.png" alt="showcase" className="h-[2.4rem]" />
          <img src="/assets/Show-4.png" alt="showcase" className="h-[2.7rem]" />
          <img src="/assets/Show-5.png" alt="showcase" className="h-[2.4rem]" />
        </ScreenScale>
      </div>
    </>
  );
  return xml;
}

export default Showcase;
