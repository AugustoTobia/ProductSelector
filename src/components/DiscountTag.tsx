
const DiscountTag = ({ initialPrice, descountedPrice }: { initialPrice: number, descountedPrice: number }) => {

	const percentage = (descountedPrice * 100) / initialPrice;
	const discount = 100 - Math.ceil(percentage)

	return (
		<span className=" text-white bg-green rounded p-1 m-2 font-bold text-sm">
			{discount + '% OFF!'}
		</span>
	)
}

export default DiscountTag