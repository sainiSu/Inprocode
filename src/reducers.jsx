import { combineReducers } from 'redux';

const initialBalance = parseFloat(import.meta.env.VITE_INITIAL_BALANCE);
const initialTodaySpending = parseFloat(import.meta.env.VITE_INITIAL_TODAY_SPENDING);
const initialPercentageVariation = parseFloat(import.meta.env.VITE_INITIAL_PERCENTAGE_VARIATION);
const initialChartData = import.meta.env.VITE_INITIAL_CHART_DATA.split(',').map(Number);

const balanceReducer = (state = initialBalance, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const todaySpendingReducer = (state = initialTodaySpending, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const percentageVariationReducer = (state = initialPercentageVariation, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const chartDataReducer = (state = initialChartData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  balance: balanceReducer,
  todaySpending: todaySpendingReducer,
  percentageVariation: percentageVariationReducer,
  chartData: chartDataReducer
});

export default rootReducer;
