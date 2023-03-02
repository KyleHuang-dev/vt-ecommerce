import { ProductItem } from "@/src/store/cart/cart.model";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import ProductBody from "@/src/views/ProductBody";

export default function ProductDetail(props: ProductItem) {
    return <ProductBody product={props} />;
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
