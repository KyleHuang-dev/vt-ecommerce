import { ActionType, createAsyncAction, getType } from "typesafe-actions";

export type Order = {
    id: number;
    totalAmount: number;
    orderItems: string;
    userId: number;
    createdAt: string;
};

export type ProductItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number | 0;
    category: string;
    description?: string;
};

export type CreateProductInput = {
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    description?: string;
};

export enum ADMIN_ACTION_TYPES {
    FETCH_ORDERS_START = "FETCH_ORDERS_START",
    FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS",
    FETCH_ORDERS_FAILED = "FETCH_ORDERS_FAILED",

    FETCH_PRODUCTS_START = "admin/FETCH_PRODUCTS_START",
    FETCH_PRODUCTS_SUCCESS = "admin/FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILED = "admin/FETCH_PRODUCTS_FAILED",

    FETCH_PRODUCT_BY_ID_START = "product/FETCH_PRODUCT_BY_ID_START",
    FETCH_PRODUCT_BY_ID_SUCCESS = "product/FETCH_PRODUCT_BY_ID_SUCCESS",
    FETCH_PRODUCT_BY_ID_FAILED = "product/FETCH_PRODUCT_BY_ID_FAILED",

    CREATE_PRODUCT_START = "product/CREATE_PRODUCT_START",
    CREATE_PRODUCT_SUCCESS = "product/CREATE_PRODUCT_SUCCESS",
    CREATE_PRODUCT_FAILED = "product/CREATE_PRODUCT_FAILED",
}

export const fetchOrders = createAsyncAction(
    ADMIN_ACTION_TYPES.FETCH_ORDERS_START,
    ADMIN_ACTION_TYPES.FETCH_ORDERS_SUCCESS,
    ADMIN_ACTION_TYPES.FETCH_ORDERS_FAILED
)<void, Order[], Error>();

export const fetchProducts = createAsyncAction(
    ADMIN_ACTION_TYPES.FETCH_PRODUCTS_START,
    ADMIN_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    ADMIN_ACTION_TYPES.FETCH_PRODUCTS_FAILED
)<void, ProductItem[], Error>();

export const fetchProductById = createAsyncAction(
    ADMIN_ACTION_TYPES.FETCH_PRODUCT_BY_ID_START,
    ADMIN_ACTION_TYPES.FETCH_PRODUCT_BY_ID_SUCCESS,
    ADMIN_ACTION_TYPES.FETCH_PRODUCT_BY_ID_FAILED
)<number, ProductItem | null, Error>();

export const createProduct = createAsyncAction(
    ADMIN_ACTION_TYPES.CREATE_PRODUCT_START,
    ADMIN_ACTION_TYPES.CREATE_PRODUCT_SUCCESS,
    ADMIN_ACTION_TYPES.CREATE_PRODUCT_FAILED
)<CreateProductInput, ProductItem, Error>();

export type fetchOrdersRequestType = ActionType<typeof fetchOrders.request>;
export type fetchProductByIdRequestType = ActionType<
    typeof fetchProductById.request
>;
export type createProductRequestType = ActionType<typeof createProduct.request>;

export const AdminActions = {
    fetchOrders,
    fetchProducts,
    fetchProductById,
    createProduct,
};

export interface IModel {
    readonly orders: Order[];
    readonly adminProduct: ProductItem | null;
    readonly adminProducts: ProductItem[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const ADMIN_INITIAL_STATE: IModel = {
    orders: [],
    adminProduct: null,
    adminProducts: [],
    isLoading: false,
    error: null,
};

export const adminReducer = (
    state: IModel = ADMIN_INITIAL_STATE,
    action: ActionType<typeof AdminActions>
): IModel => {
    switch (action.type) {
        case getType(fetchOrders.request):
            return { ...state, isLoading: true };
        case getType(fetchOrders.success):
            return { ...state, orders: action.payload, isLoading: false };
        case getType(fetchOrders.failure):
            return { ...state, error: action.payload, isLoading: false };

        case getType(fetchProducts.request):
            return { ...state, isLoading: true };
        case getType(fetchProducts.success):
            return {
                ...state,
                adminProducts: action.payload,
                isLoading: false,
            };
        case getType(fetchProducts.failure):
            return { ...state, error: action.payload, isLoading: false };

        case getType(fetchProductById.request):
            return { ...state, isLoading: true };
        case getType(fetchProductById.success):
            return {
                ...state,
                adminProduct: action.payload,
                isLoading: false,
            };
        case getType(fetchProductById.failure):
            return { ...state, error: action.payload, isLoading: false };

        case getType(createProduct.request):
            return { ...state, isLoading: true };
        case getType(createProduct.success):
            return {
                ...state,
                adminProduct: action.payload,
                isLoading: false,
            };
        case getType(createProduct.failure):
            return { ...state, error: action.payload, isLoading: false };

        default:
            return state;
    }
};
