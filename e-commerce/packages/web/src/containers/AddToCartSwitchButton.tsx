import { Button } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import { ProductItem } from "../store/cart/cart.model";
import { CartItem } from "../store/cart/cart.model";
import QuantityButtonGroup from "../components/QuantityButtonGroup";
interface ICartItem {
    readonly product: CartItem;
}
export default function AddToCartSwitchButton({ product }: ICartItem) {
    const { addItemToCart, cartItems } = useCart();

    function isItemInCart(cart: CartItem[], item: CartItem): boolean {
        return cart.some((cartItem) => cartItem.id === item.id);
    }
    const existingCartItem = isItemInCart(cartItems, product);

    {
        return existingCartItem ? (
            <QuantityButtonGroup product={product} />
        ) : (
            <Button
                onClick={() => addItemToCart(cartItems, product)}
                size="small"
            >
                Add To Cart
            </Button>
        );
    }
}
