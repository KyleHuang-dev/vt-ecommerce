import { takeLatest, all, call, put } from "redux-saga/effects";
import { CartItem } from "./cart.model";
import axios from "axios";

const createUserAndDocuments = async (cartItems: CartItem[]) => {
    const token = (
        await axios.post("http://localhost:2121", {
            email,
            password,
            userName,
        })
    ).data;
    console.log("signup token", token);
    return token;
};
