import ProductSelector from './components/ProductSelector';
import { products } from './common/mock'
import Cart from './components/Cart';
import CartContainer from './components/CartContainer';

function App() {

	return (
		<div className="flex flex-col items-center gap-y-6 bg-gray-light">
			{products.map(item => <ProductSelector key={item.id} {...item} />)}
			<CartContainer>
				<Cart />
			</CartContainer>
		</div>
	);
}

export default App;
