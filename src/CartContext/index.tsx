
import { createContext, useContext, useState } from 'react';
import { Cart, ListedProduct, CartContextProps } from '../types/types';
import { v4 as uuid } from 'uuid';

export const CartContext = createContext<CartContextProps | null>(null);

const initialState: Cart = {
	id: '',
	items: [],
	createdAt: undefined
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartState, setCartState] = useState<Cart>(initialState);

	const initCart = () => {
		setCartState({ ...cartState, id: uuid(), createdAt: Date.now().toString() })
	}

	const destroyCart = () => {
		setCartState(initialState)
	}

	const addItemToCart = (newItem: ListedProduct) => {
		setCartState((prevState) => {
			let newState: Cart = prevState;

			if (!newState.id) {
				newState = { ...newState, id: uuid(), createdAt: Date.now().toString() }
			}

			const repeatedProduct = prevState.items.find(item => item.product.id === newItem.product.id)
			if (repeatedProduct) {
				const repeatedProductIndex = newState.items.indexOf(repeatedProduct)
				const accumulation = { ...repeatedProduct, quantity: repeatedProduct.quantity + newItem.quantity }
				newState = { ...newState, items: newState.items.toSpliced(repeatedProductIndex, 1, accumulation) }

				return newState
			}

			newState = { ...newState, items: [...newState.items, newItem] }

			return newState;
		})
	}

	const removeItemFromCart = (itemToRemove: ListedProduct) => {
		setCartState((prevState) => {
			let newState: Cart = prevState;
			if (!newState.items.length) {
				return newState;
			}
			const filteredItems = newState.items.filter(item => item.product.id !== itemToRemove.product.id)
			newState = { ...newState, items: [...filteredItems] }

			return newState;
		})
	}

	return (
		<CartContext.Provider
			value={{
				initCart,
				destroyCart,
				addItemToCart,
				removeItemFromCart,
				cartState
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		throw new Error(
			'useCartContext has to be used within <CartContext.Provider>',
		);
	}

	return cartContext;
};