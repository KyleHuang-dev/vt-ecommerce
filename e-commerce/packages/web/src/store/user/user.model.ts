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
    SET_CURRENT_USER = "SET_CURRENT_USER",

    SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
    SIGN_IN_FAILED = "SIGN_IN_FAILED",
    SIGN_IN_START = "SIGN_IN_START",
}

export const setCurrentUser = createAction(
    USER_ACTION_TYPE.SET_CURRENT_USER
)<Access_Token | null>();

export type UserAuthConditions = {
    email: string;
    password: string;
};

export const fetchCategories = createAsyncAction(
    USER_ACTION_TYPE.SIGN_IN_START,
    USER_ACTION_TYPE.SIGN_IN_SUCCESS,
    USER_ACTION_TYPE.SIGN_IN_FAILED
)<UserAuthConditions, Access_Token, Error>();

export const actions = {
    setCurrentUser,
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

// export const userReducer = (
//     state: IModel = USER_INITIAL_STATE,
//     action: ActionType<typeof actions>
// ): IModel => {
//     switch (action.type) {
//         case getType(setCurrentUser):
//             return { ...state, currentUser: action.payload };

//         default:
//             return state;
//     }
// };

export const userReducer = (
    state: IModel = USER_INITIAL_STATE,
    action: ActionType<typeof actions>
): IModel => {
    switch (action.type) {
        case getType(setCurrentUser):
            return { ...state, currentUser: action.payload };

        default:
            return state;
    }
};
