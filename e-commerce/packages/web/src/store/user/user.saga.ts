import { takeLatest, all, call, put } from "redux-saga/effects";
import {
    USER_ACTION_TYPE,
    fetchUserRequestType,
    Access_Token,
    fetchUser,
} from "./user.model";
import axios from "axios";

const getUserAndDocuments = async (email?: string, password?: string) => {
    const token = (
        await axios.post("http://localhost:2121/auth/login", {
            email,
            password,
        })
    ).data;
    return token;
};

export function* fetchUserAsync({ payload }: fetchUserRequestType) {
    try {
        const tempUser: Access_Token = yield call(() =>
            getUserAndDocuments(payload.email, payload.password)
        );
        yield put(fetchUser.success(tempUser));
    } catch (error) {
        yield put(fetchUser.failure(error as Error));
    }
}

export function* onFetchUser() {
    yield takeLatest(USER_ACTION_TYPE.LOG_IN_START, fetchUserAsync);
}

export function* userSaga() {
    yield all([call(onFetchUser)]);
}
