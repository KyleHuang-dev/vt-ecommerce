import CartContainer from "@/src/components/CartContainer";
import { useCart } from "@/src/store/cart/cart.hook";
import Product from "../../pruduct";

export default function Cart() {
    const { cartItems } = useCart();

    return (
        <main>
            <CartContainer cart={cartItems} />
        </main>
    );
}
