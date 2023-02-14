import { Button } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";

export default function DecreaseButton({ product }) {
    const { removeItemFromCart, cartItems } = useCart();

    return (
        <>
            <Button onClick={() => removeItemFromCart(cartItems, product)}>
                -
            </Button>
        </>
    );
}
