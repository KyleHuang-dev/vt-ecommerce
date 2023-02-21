// import { takeLatest, all, call, put } from "redux-saga/effects";
// import {
//     CartItem,
//     CART_ACTION_TYPES,
//     createOrder,
//     createOrderRequestType,
//     Order,
// } from "./.model";
// import axios from "axios";

// const createOrderAndDocuments = async (
//     totalAmount: number,
//     orderItems: string,
//     bearer: string
// ) => {
//     console.log("saga doc", totalAmount, orderItems);
//     await axios.post(
//         "http://localhost:2121/order",
//         { totalAmount, orderItems },
//         {
//             headers: { Authorization: bearer },
//         }
//     );
// };

// export function* createOrderAsync({ payload }: createOrderRequestType) {
//     try {
//         yield call(() =>
//             createOrderAndDocuments(
//                 payload.totalAmount,
//                 payload.cartItems,
//                 payload.bearer
//             )
//         );
//         yield put(createOrder.success([]));
//     } catch (error) {
//         yield put(createOrder.failure(error as Error));
//     }
// }

// export function* onCreateOrder() {
//     yield takeLatest(CART_ACTION_TYPES.PLACE_ORDER_START, createOrderAsync);
// }

// export function* orderSaga() {
//     yield all([call(onCreateOrder)]);
// }
