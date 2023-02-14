import CartContainer from "@/src/components/CartContainer";
import CartBody from "@/src/components/CartBody";

import { useCart } from "@/src/store/cart/cart.hook";
import Product from "../../pruduct";

export default function Cart() {
    const { cartItems } = useCart();

    return (
        <main>
            <CartBody />
            {/* <CartContainer cart={cartItems} /> */}
        </main>
    );
}
