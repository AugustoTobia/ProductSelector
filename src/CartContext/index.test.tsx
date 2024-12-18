import React, { useEffect, useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCartContext } from './index';
import { products } from '../common/mock'
import '@testing-library/jest-dom/extend-expect'

const TestComponent: React.FC = () => {
	const {
		destroyCart,
		addItemToCart,
		removeItemFromCart,
		cartState } = useCartContext();

	return (
		<div>
			<span data-testid='someId'>{cartState.createdAt}</span>
			<ul>{cartState.items.map(item => <li key={item.product.id} >aProduct</li>)}</ul>
			{cartState.items[0] && <div data-testid='someProduct'>{cartState.items[0].quantity}</div>}
			<button onClick={() => { }}>Do something</button>
			<button onClick={() => addItemToCart({ product: products[0], quantity: 1 })}>add something</button>
			<button onClick={() => addItemToCart({ product: products[1], quantity: 1 })}>add another thing</button>
			<button onClick={() => addItemToCart({ product: products[0], quantity: 5 })}>add something repeated</button>
			<button onClick={() => addItemToCart({ product: products[0], quantity: 0 })}>add 0 of a thing</button>
			<button onClick={() => removeItemFromCart(products[0])}>Remove something</button>
			<button onClick={() => destroyCart()}>kill all</button>
		</div >
	);
};

describe.only('Cart Context', () => {
	it('adds something to the cart', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);
		fireEvent.click(screen.getByText('add something'));

		expect(screen.queryAllByText('aProduct')).toBeDefined();
	})

	it('removes something from the cart', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);
		fireEvent.click(screen.getByText('add something'));
		fireEvent.click(screen.getByText('add another thing'));
		fireEvent.click(screen.getByText('Remove something'));

		expect(screen.queryAllByText('aProduct')).toHaveLength(1);
	})

	it('deletes the cart if it has no items', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);
		fireEvent.click(screen.getByText('add something'));
		expect(screen.queryByTestId('someId')).not.toBeEmpty()

		fireEvent.click(screen.getByText('Remove something'));
		expect(screen.queryByTestId('someId')).toBeEmpty()

	})

	it('removes all items', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);
		fireEvent.click(screen.getByText('add something'));
		fireEvent.click(screen.getByText('add another thing'));
		expect(screen.queryByTestId('someId')).not.toBeEmpty()

		fireEvent.click(screen.getByText('kill all'));
		expect(screen.queryByTestId('someId')).toBeEmpty()
		expect(screen.queryByText('aProduct')).not.toBeInTheDocument();
	})

	it('modifies a product', ()=>{
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);
		fireEvent.click(screen.getByText('add something'));
		fireEvent.click(screen.getByText('add something repeated'));
		expect(screen.queryByTestId('someProduct')).toHaveTextContent('5')
	})
	
	it('removes the product if added 0', ()=>{
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);
		fireEvent.click(screen.getByText('add something'));
		expect(screen.queryAllByText('aProduct')).toHaveLength(1);

		fireEvent.click(screen.getByText('add 0 of a thing'));
		expect(screen.queryByText('aProduct')).not.toBeInTheDocument();
	})
})