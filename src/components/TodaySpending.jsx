const TodaySpending = () => {

  const todaySpending = parseFloat(import.meta.env.VITE_INITIAL_TODAY_SPENDING);

  // to calculate today’s total expenses and % variation compared to yesterday.

  const yesterdaySpending = parseFloat(import.meta.env.VITE_INITIAL_YESTERDAY_SPENDING);

  const percentageVariation  = ((todaySpending - yesterdaySpending) / yesterdaySpending * 100).toFixed(2);

  return (
    <div className="today-spending">
      <h2>Today´s Spending</h2>
      <p>{todaySpending} €</p>

      <div className="percentage-variation">
        <p>{percentageVariation >= 0 ? '+' : ' '} {percentageVariation} % Compared to Yesterday</p>
      </div>
    </div>
  );
};

export default TodaySpending;
