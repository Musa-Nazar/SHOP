function ScreenScale({ children, className = "" }) {
  const xml = (
    <section
      className={`w-[124rem] max-w-[95%] max-lg:max-w-[90%] mx-auto ${className}`}
    >
      {children}
    </section>
  );
  return xml;
}

export default ScreenScale;
