import { Grid, Typography } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import CartTable from "../components/CartTable";

export default function CartBody() {
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
            <CartTable />
        </Grid>
    );
}
