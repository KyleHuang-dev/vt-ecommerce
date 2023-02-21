// import {
//     ActionType,
//     createAction,
//     getType,
//     createAsyncAction,
// } from "typesafe-actions";
// import { useCart } from "../cart/cart.hook";

// export enum ORDER_ACTION_TYPES {
//     CHECK_OUT = "CHECK_OUT",
//     PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS",
//     PLACE_ORDER_FAILED = "PLACE_ORDER_FAILED",
//     PLACE_ORDER_START = "PLACE_ORDER_START",
// }

// export const createOrder = createAsyncAction(
//     ORDER_ACTION_TYPES.PLACE_ORDER_START,
//     ORDER_ACTION_TYPES.PLACE_ORDER_SUCCESS,
//     ORDER_ACTION_TYPES.PLACE_ORDER_FAILED
// )<CreateOrderConditions, [], Error>();

// export type CreateOrderConditions = {
//     // userToken: string;
//     totalAmount: number;
//     cartItems: string;
//     bearer: string;
// };

// export type createOrderRequestType = ActionType<typeof createOrder.request>;

// export interface IModel {
//     readonly isLoading: boolean;
//     readonly error: Error | null;
// }

// export const ORDER_INITIAL_STATE: IModel = {
//     isLoading: false,
//     error: null,
// };

// export const orderReducer = (
//     state: IModel = ORDER_INITIAL_STATE,
//     action: ActionType<typeof createOrder>
// ): IModel => {
//     switch (action.type) {
//         //order Saga
//         case getType(createOrder.request):
//             return { ...state, isLoading: true };
//         case getType(createOrder.success):
//             return { ...state, cartItems: action.payload, isLoading: false };
//         case getType(createOrder.failure):
//             return { ...state, error: action.payload, isLoading: false };

//         default:
//             return state;
//     }
// };
