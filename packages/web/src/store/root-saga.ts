import { all, call } from "redux-saga/effects";
import { adminSaga } from "./admin/admin.saga";
import { orderSaga } from "./cart/cart.saga";

import { userSaga } from "./user/user.saga";

export function* rootSaga() {
    yield all([call(userSaga), call(orderSaga), call(adminSaga)]);
}
