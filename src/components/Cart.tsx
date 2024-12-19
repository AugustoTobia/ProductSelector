import { MdDelete } from "react-icons/md";
import { useCartContext } from "../CartContext";
import { trimText } from "../common/utils";

const Cart = () => {
	const { cartState, removeItemFromCart } = useCartContext();

	return (
		<ul className="flex flex-col w-full gap-y-2 bg-green-light p-2 rounded-lg">
			{cartState.items.map(item => {
				return (
					<li key={item.product.id} className="flex w-full justify-between bg-green-light rounded-lg">
						<span className="w-[150px] text-start">
							{trimText(item.product.title, 10)}
						</span>
						<span>
							{item.quantity + ' ' + (item.product.measurementUnit || 'unit')}
						</span>
						<button onClick={() => removeItemFromCart(item.product)}>
							<MdDelete size={25}/>
						</button>
					</li>
				)
			})
			}
		</ul>
	)
}

export default Cart;