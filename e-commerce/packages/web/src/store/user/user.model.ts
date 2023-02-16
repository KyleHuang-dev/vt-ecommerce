import {
    ActionType,
    createAction,
    createAsyncAction,
    getType,
} from "typesafe-actions";

export type Access_Token = {
    access_token: string;
};

// export type LoggedInUser = User & {
//     access_token: string;
// };

export enum USER_ACTION_TYPE {
    SET_CURRENT_USER = "SET_CURRENT_USER",

    SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
    SIGN_IN_FAILED = "SIGN_IN_FAILED",
    SIGN_UP_START = "SIGN_UP_START",
}

export const setCurrentUser = createAction(
    USER_ACTION_TYPE.SET_CURRENT_USER
)<Access_Token | null>();

// export const fetchCategories = createAsyncAction(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED
//   )<CategorySearchConditions, Category[], Error>()

export const actions = {
    setCurrentUser,
};

export interface IModel {
    readonly currentUser: Access_Token | null | any;
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
    action: ActionType<typeof actions>
): IModel => {
    switch (action.type) {
        case getType(setCurrentUser):
            return { ...state, currentUser: action.payload };

        default:
            return state;
    }
};
