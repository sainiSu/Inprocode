import modeIcon from '../assets/mode1.png'; 
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      <img src={modeIcon} alt="Toggle Theme" />
    </button>
  );
};

export default ThemeToggle;
