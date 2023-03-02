import { Button } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import { CartItem } from "../store/cart/cart.model";

interface ICartItem {
    readonly product: CartItem;
}
export default function IncreaseButton({ product }: ICartItem) {
    const { addItemToCart, cartItems } = useCart();

    return (
        <>
            <Button onClick={() => addItemToCart(cartItems, product)}>+</Button>
        </>
    );
}
