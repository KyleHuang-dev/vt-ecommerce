// import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
// import { createOrder } from "./order.model";
// import { RootState } from "../store";

// const selectOrderReducer = (state: RootState) => state.order;
// export const useOrder = () => {
//     const dispatch = useDispatch();

//     function CheckOutOrder(
//         totalAmount: number,
//         cartItems: string,
//         bearer: string
//     ) {
//         dispatch(
//             createOrder.request({
//                 totalAmount,
//                 cartItems,
//                 bearer,
//             })
//         );
//     }
//     return {
//         CheckOutOrder,
//     };
// };
