import React, { useEffect } from "react";
import { useCartContext } from "../CartContext";
import { trimText } from "../common/utils";
import { MdDelete } from "react-icons/md";

const Cart = () => {
	const { cartState, removeItemFromCart } = useCartContext();
	useEffect(() => { }, [cartState])

	return (<div className="bg-green w-[200px] p-2 rounded-lg flex flex-col">
		<h1 className="font-black text-white">
			In Cart
		</h1>
		<ul className="flex flex-col w-full gap-y-2 bg-green-light p-2 rounded-lg">
			{cartState.items.map(item => {
				return (
					<li key={item.product.id} className="flex w-full justify-between bg-green-light rounded-lg">
						<span className="w-[150px] text-start">
							{trimText(item.product.title, 10)}
						</span>
						<span>
							{item.quantity}
						</span>
						<button onClick={() => removeItemFromCart(item.product)}>
							<MdDelete />
						</button>
					</li>
				)
			})
			}
		</ul>
	</div>)
}

export default Cart;