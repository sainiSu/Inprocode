# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Balance Tracker Application

This is a simple React application to track weekly balance and expenses. The application features a light/dark theme toggle, language flags, and navigation buttons to switch between weeks.

## Features

- Display total balance and expenses for the current week.
- Navigate between different weeks.
- Calculate the % variation compared to yeaterday.
- Toggle between light and dark themes.
- Multilingual support with language flags.
- Climb the project to Vercel and ensures that GitHub pipelines work properly, being able to blow properly.
- Implement SonarCloud in the GitHub pipeline to carry out automated code audits and ensure its quality.
- Tetsing of a three components with vitest.

## Project Structure
 - This will be the project struture of this application.
inprocode/
│
├── src/
│   ├── assets/
│   │   └── mode.png
│   ├── components/
│   │   ├── BalanceTotal.jsx
│   │   ├── ExpensesChart.jsx
│   │   ├── Flags.jsx
│   │   ├── PercentageVariation.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── TodaySpending.jsx
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── reducers.jsx
│   └── store.jsx
├── .env.local
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js


## Dependencies

- `react`
- `react-dom`
- `react-i18next`
- `react-redux`
- `redux`
- `@testing-library/react`
- `i18next`
- `i18next-browser-languagedetector`
- `i18next-http-backend`
- `axios`
- `chart.js`
- `react-chartjs-2`

## Installation

1. Clone the repository:

-Go to the terminal:

   git clone https://github.com/sainiSu/Inprocode.git

Navigate to the project directory:

cd inprocode

Install the dependencies mentioned above:

npm install

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:3000.

Components:

1) - BalanceTotal
Displays the total balance for the current week and includes buttons to navigate to the previous and next weeks.

Props:

currentWeek: Object containing data for the current week.
onPreviousWeek: Function to handle navigation to the previous week.
onNextWeek: Function to handle navigation to the next week.
isTodayWeek: Boolean indicating if the current week is the current date week.
isFirstWeek: Boolean indicating if the current week is the first week in the dataset.

-EpensesChart
Dispaly the whole expenses of the week and have all the data about the expenses per days and weekly.

-PercentageVariation
Calculate the % of the expenses compared to the yesterday.

-Data/weeklyData 
Holds the whole weekly data.

2) Flags
Displays language flags for multilingual support.

3) ThemeToggle
Button to toggle between light and dark themes.

Theming
The application supports light and dark themes. The current theme is stored in the component state and toggled via the ThemeToggle component.

4) Multilingual Support
The application uses react-i18next for multilingual support. Language flags are displayed using the Flags component.

5) Climb the project on the vercel [inprocode-kkce.vercel.app/](https://inprocode-kkce.vercel.app/)
