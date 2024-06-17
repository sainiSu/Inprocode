<<<<<<< HEAD
import { useTranslation } from 'react-i18next';

const TodaySpending = () => {
  const { t } = useTranslation();
  const todaySpending = parseFloat(import.meta.env.VITE_INITIAL_TODAY_SPENDING);
  const yesterdaySpending = parseFloat(import.meta.env.VITE_INITIAL_YESTERDAY_SPENDING);

  const percentageVariation = ((todaySpending - yesterdaySpending) / yesterdaySpending * 100).toFixed(2);

  return (
    <div className="today-spending">
      <h2>{t('todaySpending')}</h2>
      <p>{todaySpending} €</p>
      <div className="percentage-variation">
        <p>{percentageVariation >= 0 ? '+' : ''}{percentageVariation}% {t('percentageVariation')}</p>
=======
import { useTranslation } from "react-i18next";

const TodaySpending = () => {

  const { t} = useTranslation();

  const todaySpending = parseFloat(import.meta.env.VITE_INITIAL_TODAY_SPENDING);

  // to calculate today’s total expenses and % variation compared to yesterday.

  const yesterdaySpending = parseFloat(import.meta.env.VITE_INITIAL_YESTERDAY_SPENDING);

  const percentageVariation  = ((todaySpending - yesterdaySpending) / yesterdaySpending * 100).toFixed(2);

  return (
    <div className="today-spending">
      <h2>{t('Today´s Spending')}</h2>
      <p>{todaySpending} €</p>
      <br/>

      <div className="percentage-variation">
        <p>4.Today`s Expense is  {percentageVariation >= 0 ? '+' : ''} {percentageVariation} % Compared to Yesterday</p>
>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
      </div>
    </div>
  );
};

export default TodaySpending;