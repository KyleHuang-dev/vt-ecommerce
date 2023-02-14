import { combineReducers } from "redux";

// import { categoriesReducer } from './categories/category.model'
import { cartReducer } from "./cart/cart.model";

export const rootReducer = combineReducers({
    cart: cartReducer,
});

// export const rootReducer = cartReducer;
