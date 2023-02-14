import { persistor, store } from "@/src/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppBar from "../src/views/AppBar";

export default function App({ Component, pageProps }: AppProps) {
    const sections = [
        { title: "Home", url: "/" },
        { title: "Cart", url: "/cart" },
    ];

    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppBar title="E-Commerce" sections={sections} />
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    );
}
