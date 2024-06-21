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
import weeklyData from './data/weeklyData'


const App = () => {
 
  const  {t} = useTranslation();

  const [theme, setTheme] = useState('light');
  const [weekIndex, setWeekIndex] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handlePreviousWeek = () => {
    if (weekIndex > 0) {
      setWeekIndex(weekIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (weekIndex < weeklyData.length - 1) {
      setWeekIndex(weekIndex + 1);
    }
  };

  const isTodayWeek = weekIndex === weeklyData.length - 1;
  const isFirstWeek = weekIndex === 0;

  return (
    <>
    <Flags/>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    <BalanceTotal  currentWeek={weeklyData[weekIndex]}
        onPreviousWeek={handlePreviousWeek}
        onNextWeek={handleNextWeek}
        isTodayWeek={isTodayWeek}
        isFirstWeek={isFirstWeek}
      /> 
    <div className="app-container">
      
      <div className="main-content">
        <div className="text"><h2>{t('lastWeekExpenses')}</h2></div>
        <ExpensesChart currentWeek={weeklyData[weekIndex]} />
      </div>
    </div>
    </>
  );
};

export default App;
