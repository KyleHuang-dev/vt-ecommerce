import { Grid } from "@mui/material";
import SeachContainer from "../containers/SeachContainer";
import ProductCard from "../../src/views/ProductCard";
import { ProductItem } from "../store/cart/cart.model";

interface ISearchBody {
    products: ProductItem[];
}

export default function SearchBody(props: ISearchBody) {
    const { products } = props;

    return (
        <>
            <Grid>
                <Grid padding={2}>
                    <SeachContainer />
                </Grid>
                <Grid container>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Grid>
            </Grid>
        </>
    );
}
