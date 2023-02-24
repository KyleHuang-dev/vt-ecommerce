import Head from "next/head";
import { ProductItem } from "@/src/store/cart/cart.model";
import { Grid } from "@mui/material";
import { useCart } from "@/src/store/cart/cart.hook";
import ProductCard from "./ProductCard";

interface IIndexBody {
    readonly head: { title: string; name: string; content: string };
    readonly productList: ProductItem[];
}

export default function Home(props: IIndexBody) {
    const { productList, head } = props;
    const { title, name, content } = head;
    let { products, setProducts } = useCart();
    setProducts(productList);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={name} content={content} />
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
