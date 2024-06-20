import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import LanguageSelector from '../components/LanguageSelector';
import '../i18n';

test('renders LanguageSelector component', () => {
  const { getByAltText } = render(
    <Provider store={store}>
      <LanguageSelector />
    </Provider>
  );

  expect(getByAltText('Hindi')).toBeInTheDocument();
  expect(getByAltText('Spanish')).toBeInTheDocument();
  expect(getByAltText('English')).toBeInTheDocument();
});