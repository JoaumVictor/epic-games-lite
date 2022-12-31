import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
    const titleInHeader = screen.getByText('Epic Games Lite');
    const phraseInLink = screen.getByText('Login');

    expect(titleInHeader).toBeInTheDocument();
    expect(phraseInLink).toBeInTheDocument();
  });
});
