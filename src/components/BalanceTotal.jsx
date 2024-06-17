import { useTranslation } from 'react-i18next';

const BalanceTotal = () => {
  const { t } = useTranslation();
  const totalBalance = import.meta.env.VITE_INITIAL_BALANCE;
  
  return (
    <div className="total-balance">
      <h2>{t('balanceTotal')}</h2>
      <p>{totalBalance} €</p>
    </div>
  );
};

export default BalanceTotal;