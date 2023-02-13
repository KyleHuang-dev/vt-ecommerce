import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";
import { useCart } from "../store/cart/cart.hook";
import ChangeQuantityButton from "./ChangeQuantityButton";
ChangeQuantityButton;

const CartItem = ({ product }) => {
    const { clearItemFromCart, cartItems } = useCart();
    const incButtonProps = { option: "inc", product };
    const decButtonProps = { option: "dec", product };
    let { id, imageUrl, name, price, quantity } = product;
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div>
                <h4>{name}</h4>
                <h4 className="item-price">${price}</h4>
                {/* remove button */}
                <button
                    onClick={() => clearItemFromCart(cartItems, product)}
                    className="remove-btn"
                >
                    remove
                </button>
            </div>
            <div>
                {/* increase amount */}
                <ChangeQuantityButton buttonProps={incButtonProps} />
                {/* quantity */}
                <h2>{quantity}</h2>
                {/* decrease quantity */}
                <ChangeQuantityButton buttonProps={decButtonProps} />
            </div>
        </div>
    );
};

export default CartItem;
