export const renderedRating = (rates = SpecificProduct.rating) => {
  let renderedRates = [],
    isRateDecimal = rates % 1;

  for (let i = 0; i < parseInt(rates); i++)
    renderedRates.push(
      <img
        src="/assets/star-rate.png"
        alt="stars"
        className="block w-[2.5rem] aspect-square max-lg:w-[1.9rem]"
        loading="lazy"
        key={Math.random()}
      />
    );

  if (isRateDecimal)
    renderedRates.push(
      <img
        src="/assets/star-rate-half.jpg"
        alt="stars"
        className="block w-[calc(2.5rem/2)] aspect-square max-lg:w-[calc(1.9rem/2)] max-lg:h-[1.9rem]"
        loading="lazy"
      />
    );

  return renderedRates;
};
