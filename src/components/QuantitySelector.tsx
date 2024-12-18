import { FC, useEffect, useId, useState } from "react";
import { calcGroups } from "../common/utils";
import { useCartContext } from "../CartContext";
import { customValueLabel, labelUnit, QuantitySelectorProps } from "../types/types";

const QuantitySelector: FC<QuantitySelectorProps> = ({ salesUnit, unitValue, product }) => {
	const [state, setState] = useState({ unit: 0, group: 0 });
	const [isInCart, setIsInCart] = useState(false);
	const { addItemToCart, removeItemFromCart, cartState } = useCartContext()

	useEffect(() => {
		if (cartState.items.find(item => item.product.id === product.id)) {
			setIsInCart(true)
		} else { setIsInCart(false) }

	}, [cartState])

	const isGroup = salesUnit !== 'unit'

	const handleChangeUnits = (newQuantity: number) => {

		setState(() => {
			if (newQuantity < 0) return { unit: 0, group: 0 }
			return { unit: newQuantity, group: calcGroups(newQuantity, unitValue) }
		})
	}

	const handleChangeGroups = (newQuantity: number) => {
		setState(() => {
			if (newQuantity < 0) return { unit: 0, group: 0 }
			return { unit: unitValue! * newQuantity, group: newQuantity }
		})
	}

	const groupLabelId = useId();
	const unitInGroupLabelId = useId();
	const unitLabelId = useId();

	return (<div>
		{isGroup
			? <div className="flex gap-x-2">
				<label htmlFor={unitLabelId}>{customValueLabel[salesUnit]}</label>
				<input
					type="number"
					id={unitLabelId}
					className={`border-2 rounded w-12`}
					max={product.stock * unitValue!}
					value={state.unit}
					onChange={(e) => handleChangeUnits(Number(e.target.value))}
				/>
				<label htmlFor={groupLabelId}>{labelUnit[salesUnit]}</label>
				<input
					type="number"
					id={groupLabelId}
					max={product.stock}
					className={`border-2 rounded w-12`}
					value={state.group}
					onChange={(e) => handleChangeGroups(Number(e.target.value))}
				/>
			</div>
			: <div className="flex gap-x-2">
				<label htmlFor={unitInGroupLabelId}>Units</label>
				<input
					type="number"
					id={unitInGroupLabelId}
					className={`border-2 rounded w-12`}
					value={state.unit}
					max={product.stock}
					onChange={(e) => handleChangeUnits(Number(e.target.value))}
				/>
			</div>
		}

		<div className="flex flex-col gap-y-2 m-2">
			{isInCart
				? <button
					className="rounded-lg bg-blue w-200 text-white font-bold p-1"
					onClick={() => { addItemToCart({ product: product, quantity: isGroup ? state.group : state.unit }) }}
				>
					Change quantity
				</button>
				: <button
					className="rounded-lg bg-blue w-200 text-white font-bold p-1"
					onClick={() => { addItemToCart({ product: product, quantity: isGroup ? state.group : state.unit }) }}
				>
					Add to Cart
				</button>
			}

			<button
				className={`${!isInCart && 'invisible'} rounded-lg border-2 border-blue w-200 text-blue font-bold p-1`}
				onClick={() => { removeItemFromCart(product) }}
			>
				Remove from Cart
			</button>
		</div>
	</div>
	)

}

export default QuantitySelector;