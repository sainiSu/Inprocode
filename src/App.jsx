import BalanceTotal from './components/BalanceTotal';
import ExpensesChart from './components/ExpensesChart';
import TodaySpending from './components/TodaySpending';
//import PercentageVariation from './components/PercentageVariation';
import Flags from './components/Flags';
import './styles/main.css';

const App = () => {
  return (
    <div className="app-container">
      <Flags />
      <div className="main-content">
        <BalanceTotal />
        <div className="text"> <h2>Last Week Expenses</h2></div> 
        <ExpensesChart />
        <TodaySpending />
      </div>
    </div>
  );
};

export default App;
