import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpensesChart = ({ currentWeek}) => {
  const { t } = useTranslation();

  const chartData =currentWeek.chartData;
  const maxExpense = Math.max(...chartData);

  const totalExpenses = chartData.reduce((acc, val) => acc + val, 0);

  const [selectedDay, setSelectedDay] = useState(null);

  const getBarColors = () => {
    return chartData.map(value => value === maxExpense ? "#FC4100" : "#219C90");
  };

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thurusday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label:t('expenses'),
        data: chartData,
        backgroundColor: getBarColors(),
        barThickness: 50, 
      },
    ],
  };

  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSelectedDay(index);
      }
    },
  
  
  scales: {
    x: {
      ticks: {
        font: {
          size: 20,
          weight:'bolder',
        },
        color:"black",
      },
    },
    y: {
      ticks: {
        font: {
          size: 20,
          weight:'bolder',
        },
        color:"black",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 18, 
          weight:'bolder',
        },
        color:"black",
      },
    },
  },
};

  const getComparison = (index) => {
    if (index === 0) return t('noDataForComparisonWithPreviousDay');
    const prevDayExpense = chartData[index - 1];
    const currDayExpense = chartData[index];
    const diff = currDayExpense - prevDayExpense;
    const diffPercent = ((diff / prevDayExpense) * 100).toFixed(2);
    return `${diff >= 0 ? '+' : ''}${diffPercent}%  ${t('comparedToyesterday')}`;
  };

  return (
    <div className="expense-chart">
      <Bar data={data} options={options} />
      <h2><mark>{t('totalWeeklyExpenses')}: {totalExpenses} €</mark></h2>
      <br/>
      {selectedDay !== null && (
        <div className="day-details">
          <h3>{data.labels[selectedDay]} {t('detailsFor')} </h3>
          <br/>
          <p>{t('expenses')}: {chartData[selectedDay]} €</p>
          <br/>
          <p>{getComparison(selectedDay)}</p>
        </div>
      )}
    </div>
  );
};

export default ExpensesChart;
