export type Product = {
	id: string,
	title: string,
	description: string,
	price: number,
	listingPrice?: number,
	stock: number,
	salesUnit: "group" | "unit" | "area",
	measurementUnit?: "m2" | "m" | "pallet" | "bolson",
	unitValue?: number,
}

export type ListedProduct = {
	product: Product,
	quantity: number
}

export type Cart = {
	id: string,
	items: ListedProduct[],
	createdAt?: string
}

export interface ProductWithImage extends Product {
	imgSrc: string;
}

export type CartContextProps = {
	destroyCart: () => void,
	addItemToCart: (item: ListedProduct) => void,
	removeItemFromCart: (itemToRemove: Product) => void,
	cartState: Cart;
}

export type QuantitySelectorProps = {
	salesUnit: "group" | "unit" | "area",
	unitValue?: number
	product: Product
}

export enum labelUnit {
		group = 'Bundle',
		area = 'Tiles'
	}

export enum customValueLabel {
		group = 'Units',
		area = 'm2'
	}