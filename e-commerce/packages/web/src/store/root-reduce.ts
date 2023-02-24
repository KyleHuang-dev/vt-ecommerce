import { combineReducers } from "redux";

import { userReducer } from "./user/user.model";
import { cartReducer } from "./cart/cart.model";
import { adminReducer } from "./admin/admin.model";

export const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    admin: adminReducer,
});
