//import the hook to translate the language also install i18next 

import { useTranslation } from 'react-i18next';

const BalanceTotal = ({ currentWeek , onPreviousWeek , onNextWeek , isTodayWeek , isFirstWeek }) => {

  const { t } = useTranslation(); 
  
  return (
    <div className="total-balance">
      <h2>{t('balanceTotal')}</h2>
      <p>{currentWeek.balance} €</p>

      <div className="balance-buttons">
      <button className="balance-button" onClick={onPreviousWeek} disabled={isFirstWeek}>&#8592;</button>
      <button className="balance-button" onClick={onNextWeek} disabled={isTodayWeek}>&#8594;</button>
      </div>
    </div>
  );
};


export default BalanceTotal;