import ProductCard from "./ProductCard";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useCart } from "../store/cart/cart.hook";

export default function Body() {
    const { products } = useCart();

    const [input, setInput] = useState("");
    const [productList, setProductList] = useState(products);
    const getInput = (event) => {
        setInput(event.target.value);
    };

    function searchData(data: string) {
        if (data === "") {
            setProductList(products);
        } else {
            let tempArr = products.filter((product) => {
                const inputData = data.toLocaleLowerCase();
                const productName = product.name.toLowerCase();

                return productName.includes(inputData);
            });
            setProductList(tempArr);
        }
    }
    return (
        <Grid sx={{ px: 5 }}>
            <TextField
                id="search-bar"
                label="Search Bar"
                variant="standard"
                onChange={getInput}
            />
            <Button variant="outlined" onClick={() => searchData(input)}>
                Search
            </Button>
            <Grid container>
                {productList.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Grid>
        </Grid>
    );
}
