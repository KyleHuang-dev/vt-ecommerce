import axios from "axios";

import { useCart } from "@/src/store/cart/cart.hook";
import IndexBody from "../src/views/IndexBody";
import { ProductItem } from "@/src/store/cart/cart.model";

interface IProductItem {
    readonly productList: ProductItem[];
}

export default function Home(props: IProductItem) {
    const { productList } = props;
    let { products, setProducts } = useCart();
    setProducts(productList);

    const head = {
        title: "E-Commerce",
        name: "e-commerce",
        content: "whatever for now",
    };
    return (
        <>
            <IndexBody productList={products} head={head} />
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
