import CartItem from "@/src/components/CartItem";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useCart } from "../store/cart/cart.hook";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";
import ProductCard from "./ProductCard";

function CartContainer({ cart = [] }) {
    const {
        cartCount: totalQuantity,
        cartTotal: totalAmount,
        clearItemFromCart,
        cartItems,
    } = useCart();
    const dispatch = useDispatch();

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
        <Grid className="cart">
            {/* cart header */}
            <header>
                <h2>your bag</h2>
                <h5>total quantity: {totalQuantity}</h5>
            </header>
            {/* cart items */}
            <Grid container>
                {cart.map((item) => {
                    return (
                        <Grid container display="flex">
                            <ProductCard key={item.id} product={item} />
                            <Button
                                onClick={() =>
                                    clearItemFromCart(cartItems, item)
                                }
                                className="remove-btn"
                            >
                                remove
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
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
        </Grid>
    );
}

export default CartContainer;
