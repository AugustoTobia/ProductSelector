import React from 'react';
import './App.css';
import ProductSelector from './components/ProductSelector';
import { products } from './common/mock'

function App() {
	return (
		<div className="App flex flex-col items-center gap-y-6 bg-gray-light">
			{products.map(item => <ProductSelector key={item.id} {...item} />)}
		</div>
	);
}

export default App;