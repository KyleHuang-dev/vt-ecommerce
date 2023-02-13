import { Button } from "@mui/material";
import { useEffect } from "react";
import { useCart } from "../store/cart/cart.hook";
import ChangeQuantityButton from "./ChangeQuantityButton";
ChangeQuantityButton;

export default function AddToCart({ product }) {
    const { addItemToCart, cartItems } = useCart();
    const incButtonProps = { option: "inc", product };
    const decButtonProps = { option: "dec", product };

    let button;
    const isItemInCart = (cart, item) => {
        const existingCartItem = cart.find(
            (cartItem) => cartItem.id === item.id
        );
        if (existingCartItem) {
            return (button = (
                <>
                    <ChangeQuantityButton buttonProps={incButtonProps} />
                    <h5>{product.quantity}</h5>
                    <ChangeQuantityButton buttonProps={decButtonProps} />
                </>
            ));
        } else {
            return (button = (
                <Button
                    onClick={() => addItemToCart(cartItems, product)}
                    size="small"
                >
                    Add To Cart
                </Button>
            ));
        }
    };
    isItemInCart(cartItems, product);

    return <>{button}</>;
}
