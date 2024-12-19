import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';
import { CartProvider } from './CartContext';

test('renders the App', () => {
	const element = render(
		<CartProvider>
			<App />
		</CartProvider>
	);
	expect(element).toBeDefined();
});
