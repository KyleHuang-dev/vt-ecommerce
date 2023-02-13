import CartItem from "@/src/components/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../store/cart/cart.hook";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";

function CartContainer({ cart = [] }) {
    const { cartCount: totalQuantity, cartTotal: totalAmount } = useCart();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: CART_ACTION_TYPES.GET_TOTAL });
    });

    if (cart.length === 0) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>your bag</h2>
                <h5>total quantity: {totalQuantity}</h5>
            </header>
            {/* cart items */}
            <article>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </article>
            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${totalAmount}</span>
                    </h4>
                </div>
                <button
                    onClick={() =>
                        dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })
                    }
                    className="btn clear-btn"
                >
                    clear cart
                </button>
            </footer>
        </section>
    );
}

export default CartContainer;
