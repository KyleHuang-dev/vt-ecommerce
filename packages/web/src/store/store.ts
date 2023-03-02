import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./root-reduce";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;
// initial states here
const initalState = {};

const sagaMiddleware = createSagaMiddleware();

// middleware
const middleware = [sagaMiddleware];

//creating persistor
const persistConfig = {
    key: "persist-key",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
    persistedReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

sagaMiddleware.run(rootSaga);
