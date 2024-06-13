const TodaySpending = () => {
  const todaySpending = import.meta.env.VITE_INITIAL_TODAY_SPENDING;

  return (
    <div className="today-spending">
      <h2>Today´s Spending</h2>
      <p>{todaySpending} €</p>
    </div>
  );
};

export default TodaySpending;
