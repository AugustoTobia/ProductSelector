import { FC } from "react";
import { ProductWithImage } from "../types/types";
import { dottedNumber } from "../common/utils";
import QuantitySelector from "./QuantitySelector";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

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
			<img src={imgSrc} className="w-1/2 object-contain max-h-[300px]" />

			<div className="flex flex-col m-2 w-full items-center lg:items-start lg:w-1/2">
				<span className="text-xs text-gray font-semibold">
					SKU:{id}
				</span>
				<h1 className=" lg:text-lg text-start font-bold ">
					{title}
				</h1>

				{stock > 0
					? <span className="flex items-center text-green gap-x-px">
						Product in stock! <FaRegCheckCircle color="green" />
					</span>
					: <span className="flex items-center text-red gap-x-px">
						Product not available <MdOutlineCancel color="red" />
					</span>
				}

				{listingPrice
					? <div className="flex flex-col items-center lg:items-start">
						<div className="font-bold text-xl">
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

				<p className="text-start text-gray font-semibold">
					{description}
				</p>
				{Boolean(product.stock) && <QuantitySelector salesUnit={salesUnit} unitValue={unitValue} product={product} />}
			</div>
		</div>

	)
}

export default ProductSelector