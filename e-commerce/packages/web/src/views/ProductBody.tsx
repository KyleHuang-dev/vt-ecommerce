import { ProductItem } from "@/src/store/cart/cart.model";
import { Box, Grid, Typography } from "@mui/material";
import AddToCartSwitchButton from "@/src/containers/AddToCartSwitchButton";

interface IProductBody {
    readonly product: ProductItem;
}
export default function ProductBody({ product }: IProductBody) {
    const { name, price, description, imageUrl } = product;

    return (
        <Grid container padding={5}>
            <Grid display={"flex"}>
                <Grid>
                    <img src={imageUrl} alt={name} width="400px" />
                </Grid>
                <Grid
                    display={"flex"}
                    flexDirection={"column"}
                    justifyItems={"center"}
                >
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="h4">{price}</Typography>
                    <AddToCartSwitchButton product={product} />
                </Grid>
            </Grid>
            <Grid>{description}</Grid>
        </Grid>
    );
}
