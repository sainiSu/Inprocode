<<<<<<< HEAD
import { useTranslation } from 'react-i18next';

const BalanceTotal = () => {
  const { t } = useTranslation();
=======
//import the hook to translate the language also install i18next 

import { useTranslation } from 'react-i18next';

const BalanceTotal = () => {

  const { t } = useTranslation(); 

>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
  const totalBalance = import.meta.env.VITE_INITIAL_BALANCE;
  
  return (
    <div className="total-balance">
<<<<<<< HEAD
      <h2>{t('balanceTotal')}</h2>
=======
      <h2>{t('Total Balance')}</h2>
>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
      <p>{totalBalance} €</p>
    </div>
  );
};

export default BalanceTotal;