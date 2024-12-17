import React, { FC, useState } from "react";
import { ProductWithImage } from "../types/types";
import { dottedNumber } from "../common/utils";

const ProductSelector: FC<ProductWithImage> = ({
	imgSrc,
	id,
	title,
	description,
	price,
	listingPrice,
	stock,
	salesUnit,
	measurementUnit,
	unitValue }) => {

	const [state, setState] = useState()


	return (
		<div className="flex max-w-[500px] bg-[#fff] p-2">
			<img src={imgSrc} className="w-1/2 object-contain	" />

			<div className="flex flex-col items-start ml-2 w-1/2">
				<p className="text-xs text-gray font-semibold">
					SKU:{id}
				</p>
				<h1 className="text-lg text-start font-bold ">
					{title}
				</h1>
				<p>
					stock: {stock}
				</p>
				{listingPrice ? <div className="flex flex-col items-start">
					<div className="font-bold text-lg">
						${dottedNumber(listingPrice)}
					</div>
					<div className="line-through text-gray font-semibold">
						${dottedNumber(price)}
					</div>
				</div>
					: <div className="font-bold text-lg">
						${dottedNumber(price)}
					</div>
				}
				<p>
					{salesUnit}: {unitValue} {measurementUnit}
				</p>
				<p className="text-start text-gray font-semibold">
					{description}
				</p>
				<button onClick={() => { }}>comprar</button>
				<button onClick={() => { }}>agregar</button>
			</div>
		</div>

	)
}

export default ProductSelector