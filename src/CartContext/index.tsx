
import { createContext, useContext, useEffect, useState } from 'react';
import { Cart, ListedProduct, CartContextProps, Product } from '../types/types';
import { v4 as uuid } from 'uuid';

export const CartContext = createContext<CartContextProps | null>(null);

const initialState: Cart = {
	id: '',
	items: [],
	createdAt: undefined
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartState, setCartState] = useState<Cart>(initialState);

	useEffect(() => {
		if (!cartState.items.length) {
			destroyCart()
		}
	}, [cartState])

	const destroyCart = () => {
		setCartState(initialState)
	}

	const addItemToCart = (newItem: ListedProduct) => {
		if (newItem.quantity <= 0) { removeItemFromCart(newItem.product); return; }

		setCartState((prevState) => {
			let newState: Cart = prevState;
			//if cart was not created, create new cart
			if (!newState.id) {
				newState = { ...newState, id: uuid(), createdAt: Date.now().toString() }
			}

			const repeatedProduct = prevState.items.find(item => item.product.id === newItem.product.id)
			if (repeatedProduct) {
				const repeatedProductIndex = newState.items.indexOf(repeatedProduct)
				newState = { ...newState, items: newState.items.toSpliced(repeatedProductIndex, 1, newItem) }

				return newState
			}

			newState = { ...newState, items: [...newState.items, newItem] }

			return newState;
		})
	}

	const removeItemFromCart = (itemToRemove: Product) => {
		setCartState((prevState) => {
			let newState: Cart = prevState;
			if (!newState.items.length) {
				return newState;
			}
			const filteredItems = newState.items.filter(item => item.product.id !== itemToRemove.id)
			newState = { ...newState, items: [...filteredItems] }

			return newState;
		})
	}

	return (
		<CartContext.Provider
			value={{
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

export const useCartContext = (): CartContextProps => {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		throw new Error(
			'useCartContext has to be used within <CartContext.Provider>',
		);
	}

	return cartContext;
};