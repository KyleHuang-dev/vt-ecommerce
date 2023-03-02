import { ProductItem } from "@/src/store/cart/cart.model";
import { Box, Grid, Typography } from "@mui/material";
import AddToCartSwitchButton from "@/src/containers/AddToCartSwitchButton";

interface IProductBody {
    readonly product: ProductItem;
}
export default function ProductBody({ product }: IProductBody) {
    const { name, price, description, imageUrl } = product;

    return (
        <Grid container padding={5} display="flex" direction={"column"}>
            <Grid display={"flex"}>
                <Grid width="40%">
                    <img src={imageUrl} alt={name} width="400px" />
                </Grid>
                <Grid
                    width="50%"
                    padding={4}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                >
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="h4">${price}</Typography>
                    <AddToCartSwitchButton product={product} />
                </Grid>
            </Grid>
            <Grid padding={3}>
                <Typography variant="h5">description</Typography>
                <Grid padding={3}>{description}</Grid>
            </Grid>
        </Grid>
    );
}
