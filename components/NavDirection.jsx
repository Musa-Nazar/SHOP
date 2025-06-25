import Link from "next/link";
import ScreenScale from "./ScreenScale";

function NavDirection({ paths = ["shop"] }) {
  function renderedPaths(paths) {
    const renderedPagePaths = paths.map((path, index) => {
      return (
        <>
          <img
            src="/assets/gt.png"
            alt="gt"
            className="block "
            key={Math.random()}
          />
          <span
            className="satoshi-regular text-[1.6rem] leading-[2.2rem] text-black max-lg:text-[1.4rem] max-lg:leading-[1.9rem]"
            key={Math.random()}
          >
            <Link href={`/${path.toLowerCase()}`} className="t-transform">
              {String(path).toLowerCase()}
            </Link>
          </span>
        </>
      );
    });
    return renderedPagePaths;
  }
  const xml = (
    <ScreenScale className="her py-[0.1rem]">
      <div className="my-[2.2rem] max-lg:mb-[0] max-lg:mt-[2rem] max-lg: flex items-center gap-[1rem]">
        <span className="satoshi-regular text-[1.6rem] leading-[2.2rem] text-black/60 max-lg:text-[1.4rem] max-lg:leading-[1.9rem]">
          <Link href="/">Home</Link>
        </span>
        {renderedPaths(paths)}
      </div>
    </ScreenScale>
  );
  return xml;
}

export default NavDirection;
