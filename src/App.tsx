import './App.css';
import ProductSelector from './components/ProductSelector';
import { products } from './common/mock'
import { CartProvider, useCartContext } from './CartContext';
import Cart from './components/Cart';

function App() {
	const { cartState } = useCartContext()
	return (
		<div className="App flex flex-col items-center gap-y-6 bg-gray-light">
			{products.map(item => <ProductSelector key={item.id} {...item} />)}
			{cartState.id && <div className='bottom-2 right-4 z-10 max-w-[200px] fixed '>
				<Cart />
			</div>}
		</div>
	);
}

export default App;
