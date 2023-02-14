import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Products from "../../pruduct";

export default function SearchBar() {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState(Products);
    const getInput = (event) => {
        setInput(event.target.value);
    };

    function searchData(data: string) {
        let tempArr = Products.filter((product) => {
            const inputData = data.toLocaleLowerCase();
            const productName = product.name.toLowerCase();

            return productName.includes(inputData);
        });
        setProducts(tempArr);
    }
    return (
        <>
            <TextField
                id="search-bar"
                label="Search Bar"
                variant="standard"
                onChange={getInput}
            />
            <Button variant="outlined" onClick={() => searchData(input)}>
                Search
            </Button>
        </>
    );
}
