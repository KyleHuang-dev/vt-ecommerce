import { takeLatest, all, call, put } from "redux-saga/effects";
import {
    ApolloClient,
    ApolloQueryResult,
    InMemoryCache,
    gql,
} from "@apollo/client";
import {
    ADMIN_ACTION_TYPES,
    createProduct,
    createProductRequestType,
    deleteProductById,
    deleteProductByIdRequestType,
    fetchOrders,
    fetchOrdersRequestType,
    fetchProductById,
    fetchProductByIdRequestType,
    fetchProducts,
    Order,
    ProductItem,
    updateProductById,
    updateProductByIdRequestType,
} from "./admin.model";

const client = new ApolloClient({
    uri: "http://localhost:2121/graphql",
    cache: new InMemoryCache(),
});

export function* fetchOrdersAsync({ payload }: fetchOrdersRequestType) {
    try {
        const result: ApolloQueryResult<{ fetchOrders: Order[] }> = yield call(
            client.query,
            {
                query: gql`
                    query fetchOrders {
                        fetchOrders {
                            id
                            totalAmount
                            userId
                            createdAt
                            orderItems
                        }
                    }
                `,
            }
        );

        yield put(fetchOrders.success(result.data.fetchOrders));
    } catch (error) {
        yield put(fetchOrders.failure(error as Error));
    }
}

export function* createProductAsync({ payload }: createProductRequestType) {
    try {
        const result: ApolloQueryResult<{ createProduct: ProductItem[] }> =
            yield call(client.mutate, {
                mutation: gql`
                    mutation createProduct($input: CreateProductInput!) {
                        createProduct(input: $input) {
                            id
                            name
                            imageUrl
                            price
                            category
                        }
                    }
                `,
                variables: {
                    input: payload,
                },
            });

        yield put(createProduct.success(result.data.createProduct));
    } catch (error) {
        yield put(createProduct.failure(error as Error));
    }
}

export function* fetchProductByIdAsync({
    payload,
}: fetchProductByIdRequestType) {
    try {
        const result: ApolloQueryResult<{ fetchProductById: ProductItem }> =
            yield call(client.query, {
                query: gql`
                    query fetchProductById($id: Int!) {
                        fetchProductById(id: $id) {
                            id
                            name
                            description
                            price
                        }
                    }
                `,
                variables: {
                    id: payload,
                },
            });

        yield put(fetchProductById.success(result.data.fetchProductById));
    } catch (error) {
        yield put(fetchProductById.failure(error as Error));
    }
}

export function* updateProductByIdAsync({
    payload,
}: updateProductByIdRequestType) {
    try {
        const result: ApolloQueryResult<{ updateProductById: ProductItem[] }> =
            yield call(client.mutate, {
                mutation: gql`
                    mutation updateProductById(
                        $id: Int!
                        $input: UpdateProductByIdInput!
                    ) {
                        updateProductById(id: $id, input: $input) {
                            id
                            name
                            price
                            category
                            imageUrl
                        }
                    }
                `,
                variables: {
                    id: payload.id,
                    input: { ...payload },
                },
            });

        yield put(updateProductById.success(result.data.updateProductById));
    } catch (error) {
        yield put(updateProductById.failure(error as Error));
    }
}

export function* deleteProductByIdAsync({
    payload,
}: deleteProductByIdRequestType) {
    try {
        const result: ApolloQueryResult<{ deleteProductById: ProductItem[] }> =
            yield call(client.mutate, {
                mutation: gql`
                    mutation deleteProductById($id: Int!) {
                        deleteProductById(id: $id) {
                            id
                            name
                            price
                            category
                            imageUrl
                        }
                    }
                `,
                variables: {
                    id: payload,
                },
            });

        yield put(deleteProductById.success(result.data.deleteProductById));
    } catch (error) {
        yield put(deleteProductById.failure(error as Error));
    }
}

export function* fetchProductsAsync({ payload }: fetchProductByIdRequestType) {
    try {
        const result: ApolloQueryResult<{ fetchProducts: ProductItem[] }> =
            yield call(client.query, {
                query: gql`
                    query fetchProducts {
                        fetchProducts {
                            id
                            name
                            price
                            imageUrl
                            category
                        }
                    }
                `,
            });

        yield put(fetchProducts.success(result.data.fetchProducts));
    } catch (error) {
        yield put(fetchProducts.failure(error as Error));
    }
}

export function* onFetchOrders() {
    yield takeLatest(ADMIN_ACTION_TYPES.FETCH_ORDERS_START, fetchOrdersAsync);
}

export function* onCreateAdminProduct() {
    yield takeLatest(
        ADMIN_ACTION_TYPES.CREATE_PRODUCT_START,
        createProductAsync
    );
}

export function* onFetchAdminProductById() {
    yield takeLatest(
        ADMIN_ACTION_TYPES.FETCH_PRODUCT_BY_ID_START,
        fetchProductByIdAsync
    );
}

export function* onUpdateAdminProductById() {
    yield takeLatest(
        ADMIN_ACTION_TYPES.UPDATE_PRODUCT_BY_ID_START,
        updateProductByIdAsync
    );
}

export function* onDeleteAdminProductById() {
    yield takeLatest(
        ADMIN_ACTION_TYPES.DELETE_PRODUCT_BY_ID_START,
        deleteProductByIdAsync
    );
}

export function* onFetchAdminProducts() {
    yield takeLatest(
        ADMIN_ACTION_TYPES.FETCH_PRODUCTS_START,
        fetchProductsAsync
    );
}

export function* adminSaga() {
    yield all([
        call(onFetchOrders),
        call(onFetchAdminProducts),
        call(onFetchAdminProductById),
        call(onCreateAdminProduct),
        call(onUpdateAdminProductById),
        call(onDeleteAdminProductById),
    ]);
}
