import { ActionType, createAction, getType } from "typesafe-actions";
import pruduct from "@/pruduct";

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
}

export type CartItem = ProductItem & {
    quantity: number;
};

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

export const actions = {
    setIsCartOpen,
    setCartItems,
    setRemoveItemFromCart,
    setIncreaseItemFromCar,
    setDecreaseItemFromCar,
    setClearCart,
    setGetTotal,
};

export interface IModel {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
    readonly totalAmount: number;
    readonly totalQuantity: number;
    readonly products: ProductItem[];
}

export const CART_INITIAL_STATE: IModel = {
    isCartOpen: false,
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    products: [...pruduct],
};

export const cartReducer = (
    state: IModel = CART_INITIAL_STATE,
    action: ActionType<typeof actions>
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

        case getType(setClearCart):
            return {
                ...state,
                cartItems: [],
            };

        // case getType(setGetTotal):
        //     let { totalQuantity, totalAmount } = state.cartItems.reduce(
        //         (acc, curItem) => {
        //             const { price, quantity } = curItem;
        //             acc.totalQuantity += quantity;
        //             acc.totalAmount += price * quantity;

        //             return acc;
        //         },
        //         {
        //             totalQuantity: 0,
        //             totalAmount: 0,
        //         }
        //     );
        //     totalQuantity = parseFloat(totalQuantity.toFixed(2));
        //     return {
        //         ...state,
        //         totalAmount,
        //         totalQuantity,
        //     };

        default:
            return state;
    }
};
