// src/components/Flags.jsx
import { useTranslation } from 'react-i18next';
import inFlag from '../assets/flags/in.png';
import esFlag from '../assets/flags/es.png';
import ukFlag from '../assets/flags/uk.png';

const Flags = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flags">
      <img src={inFlag} alt="Hindi" onClick={() => changeLanguage('hi')} />
      <img src={esFlag} alt="Spanish" onClick={() => changeLanguage('es')} />
      <img src={ukFlag} alt="English" onClick={() => changeLanguage('en')} />
    </div>
  );
};

export default Flags;
