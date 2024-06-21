import  { useState, useEffect } from 'react';
import BalanceTotal from './components/BalanceTotal';
import ExpensesChart from './components/ExpensesChart';
//import TodaySpending from './components/TodaySpending';
//import PercentageVariation from './components/PercentageVariation';
import Flags from './components/Flags';
import ThemeToggle from './components/ThemeToggle';
import './styles/main.css';
import { useTranslation } from 'react-i18next';
import './i18n';

const App = () => {
 
  const  {t} = useTranslation();

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
    <Flags/>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    <BalanceTotal />
    <div className="app-container">
      
      <div className="main-content">
        <div className="text"><h2>{t('lastWeekExpenses')}</h2></div>
        <ExpensesChart />
      </div>
    </div>
    </>
  );
};

export default App;
