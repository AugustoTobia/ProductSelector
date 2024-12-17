import { render} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  const element =  render(<App />);
  expect(element).toBeDefined();
});
