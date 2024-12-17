import React, { useEffect } from "react";
import { useCartContext } from "../CartContext";
import { trimText } from "../common/utils";

const Cart = () => {
	const { cartState, removeItemFromCart } = useCartContext();
	useEffect(() => { }, [cartState])

	return (<div>
		<h1 className="font-black">In Cart</h1>
		{cartState.items.map(item => {
			return (<ul key={item.product.id} className="flex gap-x-4">
				<span>
					{trimText(item.product.title, 10)}
				</span>
				<span>
					{item.quantity}
				</span>
				<button onClick={() => removeItemFromCart(item)}> Delete </button>
			</ul>)
		})}

	</div>)
}

export default Cart;