import { FC } from "react";

import { ProductWithImage } from "../types/types";
import { dottedNumber } from "../common/utils";

import QuantitySelector from "./QuantitySelector";

import DiscountTag from "./DiscountTag";
import ProductInStock from "./ProductInStock";

const ProductSelector: FC<ProductWithImage> = (product) => {
	const {
		imgSrc,
		id,
		title,
		description,
		price,
		listingPrice,
		stock,
		salesUnit,
		unitValue } = product

	return (
		<div className="flex flex-col lg:flex-row items-center w-full lg:max-w-[50%] bg-[#fff] p-2">
			<img
				alt={title}
				src={imgSrc}
				className={`w-1/2 object-contain max-h-[300px] ${!stock && 'grayscale'}`}
			/>

			<div className="flex flex-col m-2 w-full items-center lg:items-start lg:w-1/2 gap-y-2">
				<div className="flex flex-col items-center lg:items-start">
					<span className="text-xs text-gray font-semibold">
						SKU:{id}
					</span>
					<h1 className="text-center font-bold lg:text-lg lg:text-start  ">
						{title}
						<ProductInStock stock={stock} />
					</h1>
				</div>

				<div >
					{listingPrice ?
						<div className="flex flex-col items-center lg:items-start">
							<div>
								<span className="line-through text-gray font-semibold">
									${dottedNumber(price)}
								</span>
							</div>
							<div className="font-bold text-xl">
								${dottedNumber(listingPrice)}
								<DiscountTag initialPrice={listingPrice} descountedPrice={price} />
							</div>

							{unitValue && salesUnit === 'group' &&
								<span className="italic text-sm font-bold text-gray">
									${dottedNumber(listingPrice / unitValue)} for unit
								</span>
							}
						</div>
						: <div className="font-bold text-lg">
							${dottedNumber(price)}
						</div>
					}
				</div>

				<p className="text-start text-lg text-gray font-semibold">
					{description}
				</p>

				{Boolean(stock) &&
					<QuantitySelector
						salesUnit={salesUnit}
						unitValue={unitValue}
						product={product}
					/>
				}

			</div>
		</div >

	)
}

export default ProductSelector