function HeroTags({ number, text }) {
  const xml = (
    <div>
      <p className="satoshi-bold text-[4rem] font-bold leading-[5.4rem] text-black max-lg:text-[2.4rem] max-lg:leading-[3.2rem]">
        {number}+
      </p>
      <p className="text-black/60 satoshi-regular text-[1.6rem] leading-[2.2rem] max-lg:text-[1.2rem]">
        {text}
      </p>
    </div>
  );
  return xml;
}

export default HeroTags;
