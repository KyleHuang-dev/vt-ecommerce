import ProductCard from "./ProductCard";

import Products from "../../pruduct";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import CartPreview from "./CartPreview";

export default function Body() {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState(Products);
    const getInput = (event) => {
        setInput(event.target.value);
    };

    function searchData(data: string) {
        let tempArr = products.filter((product) => {
            const inputData = data.toLocaleLowerCase();
            const productName = product.name.toLowerCase();

            return productName.includes(inputData);
        });
        setProducts(tempArr);
    }
    return (
        <>
            {/* <SearchBar /> */}
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
                <ProductCard products={products} />
            </Grid>
            <CartPreview />
        </>
    );
}
