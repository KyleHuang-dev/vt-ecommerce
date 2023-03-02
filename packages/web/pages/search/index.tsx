import { useCart } from "@/src/store/cart/cart.hook";
import SearchBody from "@/src/views/SearchBody";

export default function Search() {
    const { products } = useCart();

    return <SearchBody products={products} />;
}
