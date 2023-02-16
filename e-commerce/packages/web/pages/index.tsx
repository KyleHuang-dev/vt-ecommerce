import Head from "next/head";
import axios from "axios";
import { ProductItem } from "@/src/store/cart/cart.model";
import { Grid } from "@mui/material";
import ProductCard from "@/src/components/ProductCard";
import { useCart } from "@/src/store/cart/cart.hook";

interface IProductItem {
    readonly productList: ProductItem[];
}

export default function Home(props: IProductItem) {
    const { productList } = props;
    let { products, setProducts } = useCart();
    setProducts(productList);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="e-commerce" content="lala" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid container>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </>
    );
}

export async function getServerSideProps() {
    const response = await axios.get(`http://localhost:2121/products`);
    const productList = response.data;
    return {
        props: { productList },
    };
}
