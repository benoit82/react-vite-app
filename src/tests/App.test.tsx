import { render, screen } from '@testing-library/react';
import App from 'App';

describe('<App />', () => {
  it('should display correctly', () => {
    render(<App />);
    const text = screen.getByText(/switch theme counter :/i);

    expect(text).toBeInTheDocument();
  });
});
