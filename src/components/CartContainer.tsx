import React, { useEffect, useState } from "react";

import { useCartContext } from "../CartContext";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CartContainer = ({ children }: { children: React.ReactNode }) => {
	const [isMaximized, setMaximized] = useState(true);
	const { cartState } = useCartContext()

	useEffect(() => {
		if (!cartState.id) { setMaximized(true) }
	}, [cartState])

	if (!cartState.id) return

	return (
		<div
			className={`
				fixed
				z-10
				bottom-0
				right-0
				bg-green
				lg:m-6
				transform
				transition-all
				duration-150
				ease-in-out
				p-2
				rounded-lg
				flex
				flex-col
				${isMaximized
					? 'h-[200px] w-full lg:w-[400px]'
					: 'm-6 h-[40px] w-[40px]'
				}
			`}
		>
			<div className="flex items-center justify-between">
				{!isMaximized && <FaAngleUp
					color="white"
					size={25}
					className="mx-auto cursor-pointer"
					onClick={() => setMaximized(true)}
				/>}

				{isMaximized && <>
					<h1 className="text-white font-bold">In Cart</h1>
					<FaAngleDown
						color="white"
						className="cursor-pointer"
						size={25}
						onClick={() => setMaximized(false)}
					/>
				</>
				}
			</div>
			{isMaximized && children}
		</div>
	)
}

export default CartContainer;