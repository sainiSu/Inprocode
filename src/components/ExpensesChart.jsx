import { useTranslation } from 'react-i18next';

import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

//to see all the the necessary components with Chart.js i registered them with chart.js

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpensesChart = () => {
   
const { t} = useTranslation();

  const chartData = import.meta.env.VITE_INITIAL_CHART_DATA.split(',').map(Number);
  const maxExpense = Math.max(...chartData);//to get a differnt color when te expense is highest


  // to get the weekly expenses

  const totalExpenses = chartData.reduce((acc, val) => acc + val, 0);

  const getBarColors = () => {
    return chartData.map(value => value === maxExpense ? '#6295A2' : 'rgba(255, 99, 132, 0.5)');
  }
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: t('Expenses'),
        data: chartData,
        backgroundColor: getBarColors(),
      },
    ],
  };

  return (
    <>
    <Bar data={data} />;
    <h2><mark>2.{t('Total Weekly Expenses')}: {totalExpenses} €</mark></h2>
    </>
  )
};

export default ExpensesChart;
