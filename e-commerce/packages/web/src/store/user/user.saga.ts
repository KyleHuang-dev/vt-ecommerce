import { takeLatest, all, call, put } from "redux-saga/effects";
import {
    USER_ACTION_TYPE,
    fetchUserRequestType,
    Access_Token,
    fetchUser,
    createUserRequestType,
    createUser,
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
const createUserAndDocuments = async (
    email?: string,
    password?: string,
    userName?: string
) => {
    const token = (
        await axios.post("http://localhost:2121/auth/signup", {
            email,
            password,
            userName,
        })
    ).data;
    console.log("signup token", token);
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

export function* createUserAsync({ payload }: createUserRequestType) {
    try {
        const tempUser: Access_Token = yield call(() =>
            createUserAndDocuments(
                payload.email,
                payload.password,
                payload.userName
            )
        );
        yield put(createUser.success(tempUser));
    } catch (error) {
        yield put(createUser.failure(error as Error));
    }
}

export function* onFetchUser() {
    yield takeLatest(USER_ACTION_TYPE.LOG_IN_START, fetchUserAsync);
}

export function* onCreateUser() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, createUserAsync);
}

export function* userSaga() {
    yield all([call(onFetchUser), call(onCreateUser)]);
}
