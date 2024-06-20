import { useState } from 'react';
import weeklyData from '../data/weeklyData';

const WeekSelector = () => {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(weeklyData.length - 1);

  const currentWeek = weeklyData[currentWeekIndex];

  const handlePrevWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (currentWeekIndex < weeklyData.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
  };

  return (
    <div className="week-selector">
      <button onClick={handlePrevWeek} disabled={currentWeekIndex === 0}>
        &lt; Previous Week
      </button>
      <span>{currentWeek.week}</span>
      <button onClick={handleNextWeek} disabled={currentWeekIndex === weeklyData.length - 1}>
        Next Week &gt;
      </button>
    </div>
  );
};

export default WeekSelector;