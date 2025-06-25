function ColorSelector({ color, selectedColor, colorHandler }) {
  function clickHandler() {
    colorHandler(color);
  }

  const xml = (
    <div
      style={{ backgroundColor: color }}
      className={`w-[3.7rem] aspect-square rounded-[50%] border border-[rgba(0,0,0,.2)] flex justify-center items-center overflow-hidden cursor-pointer`}
      onClick={clickHandler}
    >
      {color === selectedColor && (
        <div className="flex justify-center items-center rgba(0,0,0,.6)">
          <img
            src="/assets/white-tick.png"
            className="w-[1.6rem] aspect-square"
          />
        </div>
      )}
    </div>
  );
  return xml;
}

export default ColorSelector;
