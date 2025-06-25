import ScreenScale from "./ScreenScale";

function Line({ not = false }) {
  const xml = (
    <ScreenScale className={`${not ? "!w-full max-w-full" : "her"}`}>
      <div className="w-full bg-[rgba(0,0,0,.1)] h-[0.1rem]"></div>
    </ScreenScale>
  );
  return xml;
}

export default Line;
