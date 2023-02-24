import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { RootState } from "../store";
import { AdminActions, CreateProductInput, IModel } from "./admin.model";

const selectAdminReducer = (state: RootState): IModel => state.admin;

const selectOrders = createSelector([selectAdminReducer], (s) => s.orders);
const selectIsLoading = createSelector(
    [selectAdminReducer],
    (s) => s.isLoading
);

const selectProduct = createSelector(
    [selectAdminReducer],
    (s) => s.adminProduct
);

const selectProducts = createSelector(
    [selectAdminReducer],
    (s) => s.adminProducts
);

export const useAdmin = () => {
    const dispatch = useDispatch();

    const orders = useSelector(selectOrders);
    const adminProduct = useSelector(selectProduct);
    const adminProducts = useSelector(selectProducts);
    const isLoading = useSelector(selectIsLoading);

    function fetchAllOrders() {
        dispatch(AdminActions.fetchOrders.request());
    }

    function createAdminProduct(product: CreateProductInput) {
        dispatch(AdminActions.createProduct.request(product));
    }

    function fetchAdminProductById(id: number) {
        dispatch(AdminActions.fetchProductById.request(id));
    }

    function fetchAdminProducts() {
        dispatch(AdminActions.fetchProducts.request());
    }

    return {
        orders,
        adminProduct,
        adminProducts,
        isLoading,

        fetchAllOrders,
        createAdminProduct,
        fetchAdminProductById,
        fetchAdminProducts,
    };
};
