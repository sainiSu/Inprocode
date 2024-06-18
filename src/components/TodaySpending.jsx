import { useTranslation } from 'react-i18next';

const TodaySpending = () => {

  const { t } = useTranslation();

  const todaySpending = parseFloat(import.meta.env.VITE_INITIAL_TODAY_SPENDING);
 
   // to calculate today’s total expenses and % variation
 
  const yesterdaySpending = parseFloat(import.meta.env.VITE_INITIAL_YESTERDAY_SPENDING);

  const percentageVariation = ((todaySpending - yesterdaySpending) / yesterdaySpending * 100).toFixed(2);

  return (
    <div className="today-spending">
      <h2>{t('todaySpending')}</h2>
      <p>{todaySpending} €</p>

      <br/>

      <div className="percentage-variation">
        <p>4. {percentageVariation >= 0 ? '+' : ''}{percentageVariation}% {t('percentageVariation')}</p>
      </div>
    </div>
  );
};

export default TodaySpending;