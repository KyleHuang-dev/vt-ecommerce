import { useCart } from "@/src/store/cart/cart.hook";
import { CartItem } from "@/src/store/cart/cart.model";
import { Grid, Typography } from "@mui/material";
import ProductsTable from "../../src/components/ProductsTable";

export default function Cart() {
    const { cartItems } = useCart();
    if (cartItems.length === 0) {
        return (
            <Typography gutterBottom variant="h5" component="div">
                Your cart is empty.
            </Typography>
        );
    }
    return (
        <Grid sx={{ px: 5 }}>
            <ProductsTable products={cartItems} isInHistory={false} />
        </Grid>
    );
}
