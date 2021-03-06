import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import useAction from "hooks/useAction";

import Image from "next/image";
import { Button } from "@nextui-org/react";

const CartPage = () => {
	const { productState } = useContext(ProductsContext);
	const { removeToCart, emptyCart } = useAction();

	const handleRemove = (id: string) => {
		removeToCart(id);
	};

	const handleConfirm = () => {
		emptyCart();
	};

	return (
		<div className="cart">
			<section className="section-cart">
				{productState.cart?.map((element, index) => (
					<div key={index} className="cart-shopping">
						<div className="cart-shopping--img">
							<Image
								src={element?.image}
								alt="avocado-image"
								width={250}
								height={250}
							></Image>
						</div>
						<div className="cart-shopping--detail">
							<div>
								<h3>{element.name}</h3>
								<p>{element.quantity + " x " + element.price}</p>
								<p>{"$ " + Number(element.price) * Number(element.quantity)}</p>
							</div>
							<Button
								shadow
								color="error"
								auto
								size="xl"
								onClick={() => handleRemove(element.id)}
							>
								Remove
							</Button>
						</div>
					</div>
				))}
			</section>
			<section className="section-subtotal">
				<p>{`Sub total: ${10}`}</p>
				<Button shadow color="success" size="xl" auto onClick={handleConfirm}>
					Check out
				</Button>
			</section>
		</div>
	);
};

export default CartPage;
