import { ProductItem } from "@/src/store/cart/cart.model";
import axios from "axios";
import { GetServerSideProps } from "next/types";

export default function ProductDetail(props: ProductItem) {
    const { name, price, description, imageUrl } = props;

    return (
        <>
            <img src={imageUrl} alt="" />
            <h1>{name}</h1>
            <h4>{price}</h4>
            <h4>{description}</h4>
        </>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const productId = context.query.id;
    const response = await axios.get<ProductItem>(
        `http://localhost:2121/products/${productId}`
    );
    const searchProducts = response.data;
    return {
        props: searchProducts,
    };
};
