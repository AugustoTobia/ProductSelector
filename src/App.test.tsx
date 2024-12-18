import { render } from '@testing-library/react';
import App from './App';
import { CartProvider } from './CartContext';
import '@testing-library/jest-dom'

test('renders the App', () => {
	const element = render(
		<CartProvider>
			<App />
		</CartProvider>
	);
	expect(element).toBeDefined();
});
