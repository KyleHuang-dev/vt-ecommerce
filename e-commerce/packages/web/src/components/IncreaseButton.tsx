import { Button } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";

export default function IncreaseButton({ product }) {
    const { addItemToCart, cartItems } = useCart();

    return (
        <>
            <Button onClick={() => addItemToCart(cartItems, product)}>+</Button>
        </>
    );
}
