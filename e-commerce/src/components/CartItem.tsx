import React from "react";
import { useDispatch } from "react-redux";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";


const CartItem = (props) => {
  let {id, imageUrl, name, price, amount } = props
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <h5>ID: {id}</h5>
      <img src={imageUrl} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button onClick={()=> dispatch({
          type:CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
          payload:{
            props,
            id
          }
          })} className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn">
          Inc
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn">
          Dec
        </button>
      </div>
    </div>
  );
};

export default CartItem;