import { MdDelete } from "react-icons/md";
import { useCartContext } from "../CartContext";
import { trimText } from "../common/utils";

const Cart = () => {
	const { cartState, removeItemFromCart } = useCartContext();

	return (
		<ul
			className="flex
				flex-col
				w-full
				gap-y-2
				bg-green-light
				p-2
				rounded-lg
				overflow-y-scroll
				scrollbar
				scrollbar-thumb-green
				scrollbar-thumb-rounded-lg
				scrollbar-w-3
				"
		>
			{cartState.items.map(item => {
				return (
					<li key={item.product.id} className="flex w-full justify-between bg-green-light rounded-lg">
						<span className="w-[150px] text-start">
							{trimText(item.product.title, 17)}
						</span>
						<span className="text-start w-[100px]">
							{item.quantity} {item.product.measurementUnit || 'unit'}
						</span>
						<MdDelete
							size={25}
							className="cursor-pointer"
							onClick={() => removeItemFromCart(item.product)}
						/>
					</li>
				)
			})
			}
		</ul>
	)
}

export default Cart;