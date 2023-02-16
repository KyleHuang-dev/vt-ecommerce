import { useCart } from "@/src/store/cart/cart.hook";
import { Grid } from "@mui/material";
import SeachContainer from "../../src/components/SeachContainer";
import ProductCard from "../../src/components/ProductCard";

export default function Search() {
    const { products } = useCart();

    return (
        <>
            <Grid>
                <SeachContainer />
                <Grid container>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Grid>
            </Grid>
        </>
    );
}
