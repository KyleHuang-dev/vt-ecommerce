import { Button } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import { CartItem } from "../store/cart/cart.model";

interface ICartItem {
    readonly product: CartItem;
}
export default function DecreaseButton({ product }: ICartItem) {
    const { removeItemFromCart, cartItems } = useCart();

    return (
        <>
            <Button onClick={() => removeItemFromCart(cartItems, product)}>
                -
            </Button>
        </>
    );
}
