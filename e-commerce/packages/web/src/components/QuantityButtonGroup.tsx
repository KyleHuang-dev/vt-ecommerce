import { Button, Typography } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import { CartItem, ProductItem } from "../store/cart/cart.model";

interface ICartItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    description?: string;
}

export default function QuantityButtonGroup({ product }: CartItem) {
    const { addItemToCart, cartItems, removeItemFromCart } = useCart();
    const { quantity } = product;

    return (
        <>
            <Button onClick={() => removeItemFromCart(cartItems, product)}>
                -
            </Button>
            <Typography variant="body2" component="div">
                {quantity}
            </Typography>

            <Button onClick={() => addItemToCart(cartItems, product)}>+</Button>
        </>
    );
}
