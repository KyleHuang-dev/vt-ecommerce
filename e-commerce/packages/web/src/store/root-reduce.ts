import { combineReducers } from "redux";

import { userReducer } from "./user/user.model";
import { cartReducer } from "./cart/cart.model";

export const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
});

// export const rootReducer = cartReducer;
