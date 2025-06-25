function NewsletterInput({
  type,
  imgsrc,
  className,
  placeholder = "Enter your email address",
}) {
  const xml = (
    <div
      className={"w-[34.9rem] h-[4.8rem] relative  max-lg:w-full " + className}
    >
      <input
        type={type}
        className="w-full h-full rounded-[6.2rem] bg-white pl-[5.2rem] outline-0 satoshi-regular text-[1.6rem] leading-[2.2rem] text-black placeholder:text-black/40"
        placeholder={placeholder}
      />
      <img
        src={imgsrc}
        alt="email"
        className="left-[1.788rem] w-[2.025rem] h-[1.575rem] block absolute z-[9] top-[1.612rem]"
      />
    </div>
  );
  return xml;
}

export default NewsletterInput;
