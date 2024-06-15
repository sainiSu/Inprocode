//import the hook to translate the language also install i18next 

import { useTranslation } from 'react-i18next';

const BalanceTotal = () => {

  const { t } = useTranslation(); 

  const totalBalance = import.meta.env.VITE_INITIAL_BALANCE;
  
  return (
    <div className="total-balance">
      <h2>{t('Total Balance')}</h2>
      <p>{totalBalance} €</p>
    </div>
  );
};

export default BalanceTotal;

