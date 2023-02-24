import { ProductItem } from "@/src/store/cart/cart.model";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { Box, Grid, Typography } from "@mui/material";
import AddToCartSwitchButton from "@/src/components/AddToCartSwitchButton";

export default function ProductDetail(props: ProductItem) {
    const { name, price, description, imageUrl } = props;

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
                    <AddToCartSwitchButton product={props} />
                </Grid>
            </Grid>
            <Grid>{description}</Grid>
        </Grid>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const productId = context.query.id;
    const response = await axios.get<ProductItem>(
        //put the link to env
        `http://localhost:2121/products/${productId}`
    );
    const searchProducts = response.data;
    return {
        props: searchProducts,
    };
};
