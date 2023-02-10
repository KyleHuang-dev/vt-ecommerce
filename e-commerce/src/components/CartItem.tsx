import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";

const CartItem = (props) => {
    let { id, imageUrl, name, price, quantity } = props;
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div>
                <h4>{name}</h4>
                <h4 className="item-price">${price}</h4>
                {/* remove button */}
                <button
                    onClick={() =>
                        dispatch({
                            type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
                            payload: {
                                props,
                            },
                        })
                    }
                    className="remove-btn"
                >
                    remove
                </button>
            </div>
            <div>
                {/* increase amount */}
                <button
                    onClick={() =>
                        dispatch({
                            type: CART_ACTION_TYPES.INCREASE_ITEM_FROM_CART,
                            payload: { props },
                        })
                    }
                    className="quantity-btn"
                >
                    Inc
                </button>
                {/* quantity */}
                <h2>{quantity}</h2>
                {/* decrease quantity */}
                <button
                    onClick={() =>
                        dispatch({
                            type: CART_ACTION_TYPES.DECREASE_ITEM_FROM_CART,
                            payload: { props },
                        })
                    }
                    className="quantity-btn"
                >
                    Dec
                </button>
            </div>
        </div>
    );
};

export default CartItem;
