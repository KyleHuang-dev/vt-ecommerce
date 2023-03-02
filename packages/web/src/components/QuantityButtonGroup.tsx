import { Button, Grid, Typography } from "@mui/material";
import { useCart } from "../store/cart/cart.hook";
import { CartItem, ProductItem } from "../store/cart/cart.model";

interface IQuantityButtonGroup {
    readonly product: CartItem | ProductItem;
}

export default function QuantityButtonGroup({ product }: IQuantityButtonGroup) {
    const { addItemToCart, cartItems, removeItemFromCart } = useCart();
    //helper function
    let quantity = cartItems.map((item) => {
        if (item.id === product.id) return item.quantity;
    });

    return (
        <Grid display={"flex"} alignItems={"center"}>
            <Button onClick={() => removeItemFromCart(cartItems, product)}>
                -
            </Button>
            <Typography variant="body2" component="div">
                {quantity}
            </Typography>

            <Button onClick={() => addItemToCart(cartItems, product)}>+</Button>
        </Grid>
    );
}
