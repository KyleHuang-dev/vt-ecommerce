import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Products from "../../pruduct";

export default function Body() {
    return (
        <>
            <SearchBar />
            <ProductCard products={Products} />
        </>
    );
}
