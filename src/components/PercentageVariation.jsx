const PercentageVariation = () => {
  const percentageVariation = import.meta.env.VITE_INITIAL_PERCENTAGE_VARIATION;

  return (
    <div className="percentage-variation">
      <p>+{percentageVariation}% Compared to yesterday</p>
    </div>
  );
};

export default PercentageVariation;
