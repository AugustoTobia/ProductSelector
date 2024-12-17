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
	initCart: () => void,
	destroyCart: () => void,
	addItemToCart: (item: ListedProduct) => void,
	removeItemFromCart: (itemToRemove: ListedProduct) => void,
	cartState: Cart;
}