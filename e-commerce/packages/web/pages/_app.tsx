import { persistor, store } from "@/src/store/store";
import "@/styles/globals.css";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppBar from "../src/components/AppBar";

export default function App({ Component, pageProps }: AppProps) {
    interface ISetions {
        title: string;
        url: string;
    }
    const sections: ISetions[] = [
        { title: "Home", url: "/" },
        { title: "Profile", url: "/user/my-profile" },
        { title: "Search", url: "/search" },
        { title: "Cart", url: "/cart" },
    ];

    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppBar title="E-Commerce" sections={sections} />
                    <Container maxWidth="lg">
                        <main>
                            <Component {...pageProps} />
                        </main>
                    </Container>
                </PersistGate>
            </Provider>
        </>
    );
}
