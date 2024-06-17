import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
=======

>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpensesChart = () => {
<<<<<<< HEAD
  const { t } = useTranslation();
=======
   
const { t} = useTranslation();

>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
  const chartData = import.meta.env.VITE_INITIAL_CHART_DATA.split(',').map(Number);
  const maxExpense = Math.max(...chartData);

  const totalExpenses = chartData.reduce((acc, val) => acc + val, 0);

  const getBarColors = () => {
    return chartData.map(value => value === maxExpense ? '#6295A2' : 'rgba(255, 99, 132, 0.5)');
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
<<<<<<< HEAD
        label: t('expenses'),
=======
        label: t('Expenses'),
>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
        data: chartData,
        backgroundColor: getBarColors(),
      },
    ],
  };

  return (
    <>
<<<<<<< HEAD
      <Bar data={data} />
      <h2><mark>{t('totalWeeklyExpenses')}: {totalExpenses} €</mark></h2>
=======
    <Bar data={data} />
    <h2><mark>2.{t('Total Weekly Expenses')}: {totalExpenses} €</mark></h2>
>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
    </>
  );
};

export default ExpensesChart;