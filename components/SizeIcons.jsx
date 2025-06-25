function SizeIcons({ size, selecetedSize, sizeHandler }) {
  const xml = (
    <span
      className={`block rounded-[6.2rem]  py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] cursor-pointer  ${
        selecetedSize === size
          ? "bg-black text-white"
          : " text-black/60 bg-[#F0F0F0]"
      }`}
      onClick={() => sizeHandler(size)}
    >
      {size}
    </span>
  );
  return xml;
}

export default SizeIcons;
