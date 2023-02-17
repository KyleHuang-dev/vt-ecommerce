import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Token } from "typescript";
import { RootState } from "../store";
import { Access_Token, actions, IModel } from "./user.model";

const selectUserReducer = (state: RootState) => state.user;

export const selectUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser
);

export const useUser = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectUser);

    async function setcurrentUser(token: Access_Token) {
        dispatch(actions.setCurrentUser(token));
    }

    return {
        currentUser,
        setcurrentUser,
    };
};
