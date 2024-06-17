<<<<<<< HEAD
// src/main.jsx
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import store from './store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
=======
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'
import store from './store.jsx'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.js'
>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
<<<<<<< HEAD
      <App />
    </I18nextProvider>
  </Provider>,
);
=======
    <App />
    </I18nextProvider>
  </Provider>
)
>>>>>>> 7bbdf0287f3cc33c4872462003c3ba5468a82d86
