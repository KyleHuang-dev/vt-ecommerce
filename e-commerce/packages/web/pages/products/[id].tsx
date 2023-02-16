import axios from "axios";
import { useRouter } from "next/router";

export default function ItemDetail(props) {
    return (
        <>
            <h1>{props.id}</h1>
            <h1>{props.name}</h1>
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const productId = params.id;
    const response = await axios.get(
        `http://localhost:2121/products/${productId}`
    );
    const searchProducts = response.data;
    return {
        props: searchProducts,
    };
}
