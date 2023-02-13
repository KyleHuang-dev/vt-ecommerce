import CartContainer from "@/src/components/CartContainer";
import { useCart } from "@/src/store/cart/cart.hook";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../pruduct";

export default function Cart() {
    const { cartItems } = useCart();
    const dispatch = useDispatch();

    return (
        <main>
            <CartContainer cart={cartItems} />
        </main>
    );
}
