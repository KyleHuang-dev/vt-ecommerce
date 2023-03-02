import {
    ActionType,
    createAction,
    createAsyncAction,
    getType,
} from "typesafe-actions";

export type Access_Token = {
    access_token: string;
} | null;

export enum USER_ACTION_TYPE {
    LOG_OUT_USER = "LOG_OUT_USER",

    LOG_IN_SUCCESS = "LOG_IN_SUCCESS",
    LOG_IN_FAILED = "LOG_IN_FAILED",
    LOG_IN_START = "LOG_IN_START",

    SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
    SIGN_UP_FAILED = "SIGN_UP_FAILED",
    SIGN_UP_START = "SIGN_UP_START",
}

export const logOutUser = createAction(USER_ACTION_TYPE.LOG_OUT_USER)<null>();

export type UserAuthConditions = {
    email: string;
    password: string;
};

export type CreateUserConditions = {
    email: string;
    password: string;
    userName?: string;
};

export const fetchUser = createAsyncAction(
    USER_ACTION_TYPE.LOG_IN_START,
    USER_ACTION_TYPE.LOG_IN_SUCCESS,
    USER_ACTION_TYPE.LOG_IN_FAILED
)<UserAuthConditions, Access_Token, Error>();

export const createUser = createAsyncAction(
    USER_ACTION_TYPE.SIGN_UP_START,
    USER_ACTION_TYPE.SIGN_UP_SUCCESS,
    USER_ACTION_TYPE.SIGN_UP_FAILED
)<CreateUserConditions, Access_Token, Error>();

export type fetchUserRequestType = ActionType<typeof fetchUser.request>;
export type createUserRequestType = ActionType<typeof createUser.request>;

export const actions = {
    logOutUser,
};

export interface IModel {
    readonly currentUser: Access_Token | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const USER_INITIAL_STATE: IModel = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (
    state: IModel = USER_INITIAL_STATE,
    action: ActionType<typeof actions | typeof fetchUser | typeof createUser>
): IModel => {
    switch (action.type) {
        case getType(logOutUser):
            return { ...state, currentUser: action.payload };

        case getType(createUser.request):
            return { ...state, isLoading: true };
        case getType(createUser.success):
            return { ...state, currentUser: action.payload, isLoading: false };
        case getType(createUser.failure):
            return { ...state, error: action.payload, isLoading: false };

        case getType(fetchUser.request):
            return { ...state, isLoading: true };
        case getType(fetchUser.success):
            return { ...state, currentUser: action.payload, isLoading: false };
        case getType(fetchUser.failure):
            return { ...state, error: action.payload, isLoading: false };

        default:
            return state;
    }
};
