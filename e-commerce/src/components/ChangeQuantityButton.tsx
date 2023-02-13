import { useCart } from "../store/cart/cart.hook";

export default function ChangeQuantityButton({ buttonProps }) {
    let button;
    const { option, product } = buttonProps;
    const { removeItemFromCart, addItemToCart, cartItems } = useCart();

    if (option === "inc") {
        button = (
            <button
                onClick={() => addItemToCart(cartItems, product)}
                className="quantity-btn"
            >
                Inc
            </button>
        );
    }
    if (option === "dec") {
        button = (
            <button
                onClick={() => removeItemFromCart(cartItems, product)}
                className="quantity-btn"
            >
                Dec
            </button>
        );
    }
    return <>{button}</>;
}
