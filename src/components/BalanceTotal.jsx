const BalanceTotal = () => {
  const totalBalance = import.meta.env.VITE_INITIAL_BALANCE;
  
  return (
    <div className="total-balance">
      <h2>Total Balance</h2>
      <p>{totalBalance} €</p>
    </div>
  );
};

export default BalanceTotal;

