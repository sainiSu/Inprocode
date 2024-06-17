import PropTypes from 'prop-types';

const TodayExpenses = ({ todayExpenses, yesterdayExpenses }) => {
  const percentageVariation = yesterdayExpenses
    ? ((todayExpenses - yesterdayExpenses) / yesterdayExpenses) * 100
    : 0;

  return (
    <div>
      <h2>Today Total Expenses: ${todayExpenses}</h2>
      <p>Percentage Variation from Yesterday: {percentageVariation}%</p>
    </div>
  );
};

TodayExpenses.propTypes = {
  todayExpenses: PropTypes.number.isRequired,
  yesterdayExpenses: PropTypes.number.isRequired,
};

export default TodayExpenses;
