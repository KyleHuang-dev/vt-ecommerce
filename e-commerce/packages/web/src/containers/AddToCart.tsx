import { Button, Typography } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import IncreaseButton from "../components/IncreaseButton";
import DecreaseButton from "../components/DecreaseButton";
import { ProductItem } from "../store/cart/cart.model";
import { CartItem } from "../store/cart/cart.model";

interface ICartItem {
    readonly product: CartItem;
}
export default function AddToCart({ product }: ICartItem) {
    const { addItemToCart, cartItems } = useCart();

    let button;
    const isItemInCart = (cart: CartItem[], item: ProductItem) => {
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
