import { Button, Typography } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import ChangeQuantityButton from "./ChangeQuantityButton";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";

export default function AddToCart({ product }) {
    const { addItemToCart, cartItems } = useCart();

    let button;
    const isItemInCart = (cart, item) => {
        const existingCartItem = cart.find(
            (cartItem) => cartItem.id === item.id
        );
        if (existingCartItem) {
            return (button = (
                <>
                    <DecreaseButton product={product} />
                    <Typography variant="body2" component="div">
                        {product.quantity}
                    </Typography>
                    <IncreaseButton product={item} />
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
