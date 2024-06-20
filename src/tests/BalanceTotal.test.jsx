import { render, screen } from '@testing-library/react';
import BalanceTotal from '../components/BalanceTotal';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { describe, it, expect } from 'vitest';

describe('BalanceTotal', () => {
  it('renders BalanceTotal component', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BalanceTotal />
      </I18nextProvider>
    );
    const balanceElement = screen.getByText(/Total Balance/i);
    expect(balanceElement).toBeInTheDocument();
  });

  it('renders left arrow', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BalanceTotal />
      </I18nextProvider>
    );
    const leftArrow = screen.getByText('←');
    expect(leftArrow).toBeInTheDocument();
  });

  it('renders right arrow', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BalanceTotal />
      </I18nextProvider>
    );
    const rightArrow = screen.getByText('→');
    expect(rightArrow).toBeInTheDocument();
  });

  it('displays balance amount', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BalanceTotal />
      </I18nextProvider>
    );
    const balanceAmount = screen.getByText(/3323 €/i);
    expect(balanceAmount).toBeInTheDocument();
  });
});
