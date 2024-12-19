import { FC, useEffect, useId, useState } from "react";

import { customValueLabel, labelUnit, QuantitySelectorProps } from "../types/types";
import { calcGroups } from "../common/utils";

import { useCartContext } from "../CartContext";

const QuantitySelector: FC<QuantitySelectorProps> = ({
	salesUnit,
	unitValue,
	product
}) => {
	const [state, setState] = useState({ unit: 0, group: 0 });
	const [isInCart, setIsInCart] = useState(false);
	const { addItemToCart, removeItemFromCart, cartState } = useCartContext()
	const groupLabelId = useId();
	const unitInGroupLabelId = useId();
	const unitLabelId = useId();

	useEffect(() => {
		if (cartState.items.find(item => item.product.id === product.id)) {
			setIsInCart(true)
		} else { setIsInCart(false) }

	}, [cartState, product.id])

	const isGroup = salesUnit !== 'unit';

	const handleChangeUnits = (newQuantity: number) => {
		const truncated = Math.trunc(newQuantity);

		setState(() => {
			if (newQuantity < 0) return { unit: 0, group: 0 };

			if (isGroup && newQuantity > product.stock * unitValue!) {
				return { unit: product.stock * unitValue!, group: product.stock }
			}

			if (!isGroup && newQuantity > product.stock) {
				return { unit: product.stock, group: 0 }
			}

			return { unit: truncated, group: calcGroups(truncated, unitValue) };
		})
	}

	const handleChangeGroups = (newQuantity: number) => {
		const truncated = Math.trunc(newQuantity)
		setState(() => {
			if (newQuantity < 0) return { unit: 0, group: 0 };

			if (newQuantity > product.stock) {
				return { unit: product.stock * unitValue!, group: product.stock }
			}

			return { unit: unitValue! * truncated, group: truncated };
		})
	}

	return (<div className="w-full flex flex-col">
		<div className="flex gap-x-4 w-full justify-center">
			{isGroup ?
				<>
					<div className="flex gap-x-2">
						<label htmlFor={unitLabelId}>
							{customValueLabel[salesUnit]}
						</label>
						<input
							type="number"
							id={unitLabelId}
							className={`text-center border-2 rounded w-12`}
							max={product.stock * unitValue!}
							value={state.unit}
							onChange={(e) => handleChangeUnits(Number(e.target.value))}
						/>
					</div>
					<div className="flex gap-x-2">
						<label htmlFor={groupLabelId}>
							{labelUnit[salesUnit]}
						</label>
						<input
							type="number"
							id={groupLabelId}
							max={product.stock}
							className={`text-center border-2 rounded w-12`}
							value={state.group}
							step={1}
							onChange={(e) => handleChangeGroups(Number(e.target.value))}
						/>
					</div>
				</>
				: <div className="flex gap-x-2">
					<label htmlFor={unitInGroupLabelId}>
						Units
					</label>
					<input
						type="number"
						id={unitInGroupLabelId}
						className={`text-center border-2 rounded w-12`}
						value={state.unit}
						max={product.stock}
						onChange={(e) => handleChangeUnits(Number(e.target.value))}
					/>
				</div>
			}
		</div>

		<div className="flex flex-col items-center gap-y-2 m-2">
			<button
				className="rounded-lg bg-blue w-[200px] text-white font-bold p-1"
				onClick={() => {
					addItemToCart({
						product: product,
						quantity: isGroup ? state.group : state.unit
					})
				}}
			>
				{isInCart ? 'Change quantity' : 'Add to Cart'}
			</button>

			<button
				className={`${!isInCart && 'invisible'} rounded-lg border-2 border-blue w-[200px] text-blue font-bold p-1`}
				onClick={() => { removeItemFromCart(product) }}
			>
				Remove from Cart
			</button>
		</div>
	</div>
	)
}

export default QuantitySelector;