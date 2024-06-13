import BalanceTotal from './components/BalanceTotal';
import ExpensesChart from './components/ExpensesChart';
import TodaySpending from './components/TodaySpending';
import PercentageVariation from './components/PercentageVariation';
import Flags from './components/Flags';
import './styles/main.css';

const App = () => {
  return (
    <div className="app-container">
      <Flags />
      <div className="main-content">
        <BalanceTotal />
        <ExpensesChart />
        <TodaySpending />
        <PercentageVariation />
      </div>
    </div>
  );
};

export default App;
