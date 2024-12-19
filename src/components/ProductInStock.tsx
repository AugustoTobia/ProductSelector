import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const ProductInStock = ({ stock }: { stock: number }) => {
	return (<>
		{stock > 0
			? <span className="inline-flex ml-2 text-sm items-center text-green gap-x-px">
				{`Product in stock! (${stock})`}
				<FaRegCheckCircle color="green" className="ml-1" />
			</span>
			: <span className="inline-flex ml-2 text-sm items-center text-red gap-x-px">
				Product not available
				<MdOutlineCancel color="red" />
			</span>
		}
	</>
	)
}

export default ProductInStock;