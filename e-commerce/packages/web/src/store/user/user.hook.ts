import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Token } from "typescript";
import { RootState } from "../store";
import {
    Access_Token,
    actions,
    createUser,
    fetchUser,
    IModel,
} from "./user.model";

const selectUserReducer = (state: RootState): IModel => state.user;

export const selectUser = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.currentUser
);

const selectUserIsLoading = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.isLoading
);

export const useUser = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectUser);
    const isLoading = useSelector(selectUserIsLoading);

    function logOutUser() {
        dispatch(actions.logOutUser(null));
    }

    function logInUser(email: string, password: string) {
        dispatch(
            fetchUser.request({
                email,
                password,
            })
        );
    }

    function signUpUser(email: string, password: string, userName?: string) {
        dispatch(
            createUser.request({
                email,
                password,
                userName,
            })
        );
    }

    return {
        currentUser,
        isLoading,
        logInUser,
        logOutUser,
        signUpUser,
    };
};
