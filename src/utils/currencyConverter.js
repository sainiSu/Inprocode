import currency from 'currency.js';

const apiEndpoint = 'https://api.exchangerate-api.com/v4/latest/USD'; // Example API endpoint

export const getExchangeRates = async () => {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    return null;
  }
};

export const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
  if (!rates) return amount;
  const rate = rates[toCurrency] / rates[fromCurrency];
  return currency(amount).multiply(rate).value;
};
