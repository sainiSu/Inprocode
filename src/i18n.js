import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      balanceTotal: "Total Balance",
      todaySpending: "Today's Spending",
      percentageVariation: "Compared to yesterday",
      lastWeekExpenses: "Last Week Expenses",
      expenses: "Expenses",
      totalWeeklyExpenses: "Total Weekly Expenses",
      detailsFor: "Details For",
      comparedToyesterday: "compared to yesterday",
      noDataForComparisonWithPreviousDay: "No data for comparison with previous day"
    }
  },
  es: {
    translation: {
      balanceTotal: "Balance Total",
      todaySpending: "Gasto de Hoy",
      percentageVariation: "Comparado con ayer",
      lastWeekExpenses: "Gastos de la Semana Pasada",
      expenses: "Gastos",
      totalWeeklyExpenses: "Gastos Semanales Totales",
      detailsFor: "Detalles para",
      comparedToyesterday: "comparado con ayer",
      noDataForComparisonWithPreviousDay:"No hay datos para comparar con el día anterior" 
    }
  },
  hi: {
    translation: {
      balanceTotal: "कुल शेष",
      todaySpending: "आज का खर्च",
      percentageVariation: "कल की तुलना में",
      lastWeekExpenses: "पिछले सप्ताह के खर्चे",
      expenses: "खर्चे",
      totalWeeklyExpenses: "साप्ताहिक कुल खर्चे",
      detailsFor: "के लिए विवरण",
      comparedToyesterday: "कल की तुलना में",
      noDataForComparisonWithPreviousDay: "पिछले दिन से तुलना के लिए कोई डेटा नहीं"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
