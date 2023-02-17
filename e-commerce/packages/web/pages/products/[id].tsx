import axios from "axios";

export default function ProductDetail(props) {
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
