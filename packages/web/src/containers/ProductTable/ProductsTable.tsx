import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useCart } from "../../store/cart/cart.hook";
import { useUser } from "../../store/user/user.hook";
import { CartItem, ProductItem } from "../../store/cart/cart.model";

import ProductTableHeader from "./ProductTableComponents/ProductTableHeader";
import ProductTableBody from "./ProductTableComponents/ProductTableBody";
import ProductTableFooter from "./ProductTableComponents/ProductTableFooter";

interface IProductTable {
    readonly products: ProductItem[] | CartItem[];
    readonly isInHistory: boolean;
    readonly isInAdmin?: boolean;
}

export default function ProductsTable(props: IProductTable) {
    const { products, isInHistory, isInAdmin = false } = props;

    const { cartTotal, CheckOutOrder } = useCart();
    const { currentUser } = useUser();
    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    const cartItemsStr = JSON.stringify(products);
    const checkOutHandler = async () => {
        CheckOutOrder(cartTotal, cartItemsStr, bearer);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <ProductTableHeader
                    isInHistory={isInHistory}
                    isInAdmin={isInAdmin}
                />
                <ProductTableBody
                    products={products}
                    isInHistory={isInHistory}
                    isInAdmin={isInAdmin}
                />
                <ProductTableFooter
                    isInHistory={isInHistory}
                    cartTotal={cartTotal}
                    checkOutHandler={checkOutHandler}
                />
            </Table>
        </TableContainer>
    );
}
