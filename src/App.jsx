import BalanceTotal from './components/BalanceTotal';
import ExpensesChart from './components/ExpensesChart';
import TodaySpending from './components/TodaySpending';
//import PercentageVariation from './components/PercentageVariation';
import LanguageSelector from './components/LanguageSelector';
import './styles/main.css';
import { useTranslation } from 'react-i18next';

const App = () => {

  const { t } = useTranslation();
  
  return (
    <>
    <LanguageSelector />
    <BalanceTotal />
    <div className="app-container">
      <div className="main-content">
        <div className="text"> <h2>{t('Last Week Expenses')}</h2></div> 
        <ExpensesChart />
      </div>
      <TodaySpending />
    </div>
    </>
  )
};

export default App;
