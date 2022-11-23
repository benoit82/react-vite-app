import { render } from '@testing-library/react';
import App from 'App';

describe('<App />', () => {
  it('should display correctly', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
