import {
    ActionType,
    createAction,
    getType,
    createAsyncAction,
} from "typesafe-actions";
import { getTypeParameterOwner } from "typescript";

export type ProductItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
};

export enum CART_ACTION_TYPES {
    SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
    SET_CART_ITEMS = "cart/SET_CART_ITEMS",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
    INCREASE_ITEM_FROM_CART = "INCREASE_ITEM_FROM_CART",
    DECREASE_ITEM_FROM_CART = "DECREASE_ITEM_FROM_CART",
    CLEAR_CART = "CLEAR_CART",
    GET_TOTAL = "GET_TOTAL",
    SET_PRODUCTS = "SET_PRODUCTS",

    //Order Saga start from here.
    CHECK_OUT = "CHECK_OUT",
    PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS",
    PLACE_ORDER_FAILED = "PLACE_ORDER_FAILED",
    PLACE_ORDER_START = "PLACE_ORDER_START",
}

export const createOrder = createAsyncAction(
    CART_ACTION_TYPES.PLACE_ORDER_START,
    CART_ACTION_TYPES.PLACE_ORDER_SUCCESS,
    CART_ACTION_TYPES.PLACE_ORDER_FAILED
)<CreateOrderConditions, CartItem[], Error>();

export type CreateOrderConditions = {
    cartItems: CartItem[];
};

export type createRequestType = ActionType<typeof createOrder.request>;
// Order Saga till here

export type CartItem = ProductItem & {
    quantity: number;
};

export const setCheckOut = createAction(CART_ACTION_TYPES.CHECK_OUT)<
    CartItem[] | null
>();

export const setIncreaseItemFromCar = createAction(
    CART_ACTION_TYPES.INCREASE_ITEM_FROM_CART
)<CartItem[] | void>();

export const setDecreaseItemFromCar = createAction(
    CART_ACTION_TYPES.DECREASE_ITEM_FROM_CART
)<CartItem[]>();

export const setClearCart = createAction(CART_ACTION_TYPES.CLEAR_CART)<
    CartItem[]
>();

export const setRemoveItemFromCart = createAction(
    CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART
)<CartItem[]>();

export const setIsCartOpen = createAction(
    CART_ACTION_TYPES.SET_IS_CART_OPEN
)<boolean>();

export const setCartItems = createAction(CART_ACTION_TYPES.SET_CART_ITEMS)<
    CartItem[]
>();

export const setGetTotal = createAction(CART_ACTION_TYPES.GET_TOTAL)<
    CartItem[] | void
>();

export const setProducts = createAction(CART_ACTION_TYPES.SET_PRODUCTS)<
    ProductItem[]
>();

export const actions = {
    setIsCartOpen,
    setCartItems,
    setRemoveItemFromCart,
    setIncreaseItemFromCar,
    setDecreaseItemFromCar,
    setClearCart,
    setGetTotal,
    setProducts,
    setCheckOut,
};

export interface IModel {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
    readonly totalAmount: number;
    readonly totalQuantity: number;
    readonly products: ProductItem[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const CART_INITIAL_STATE: IModel = {
    isCartOpen: false,
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    products: [],
    isLoading: false,
    error: null,
};

export const cartReducer = (
    state: IModel = CART_INITIAL_STATE,
    action: ActionType<typeof actions | typeof createOrder>
): IModel => {
    switch (action.type) {
        case getType(setIsCartOpen):
            return { ...state, isCartOpen: action.payload };

        case getType(setCartItems):
            return { ...state, cartItems: action.payload };

        case getType(setRemoveItemFromCart):
            return {
                ...state,
                cartItems: action.payload,
            };

        case getType(setIncreaseItemFromCar):
            return { ...state, cartItems: action.payload };

        case getType(setDecreaseItemFromCar):
            return { ...state, carItems: action.payload };

        case getType(setProducts):
            return { ...state, products: action.payload };

        case getType(setClearCart):
            return {
                ...state,
                cartItems: [],
            };

        case getType(setCheckOut):
            return { ...state, cartItems: action.payload };

        //order Saga
        case getType(createOrder.request):
            return { ...state, isLoading: true };
        case getType(createOrder.success):
            return { ...state, cartItems: action.payload, isLoading: false };
        case getType(createOrder.failure):
            return { ...state, error: action.payload, isLoading: false };

        default:
            return state;
    }
};
