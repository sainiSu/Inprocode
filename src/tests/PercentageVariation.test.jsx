import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import PercentageVariation from '../components/PercentageVariation';
import '../i18n';

test('renders PercentageVariation component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <PercentageVariation />
    </Provider>
  );

  expect(getByText('+2.4% Compared to yesterday')).toBeInTheDocument(); 
});