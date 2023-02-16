import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../store/cart/cart.hook";

export default function Body() {
    const { products, setProducts } = useCart();
    const [input, setInput] = useState("");
    const getInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    async function searchData(data: string) {
        const respon = await axios.post(
            "http://localhost:2121/products/search",
            {
                searchStr: data,
            }
        );
        const rearchResult = respon.data;
        console.log(products);
        return setProducts(rearchResult);
    }

    return (
        <Grid sx={{ px: 5 }}>
            <TextField
                id="search-bar"
                label="Search Bar"
                variant="standard"
                onChange={getInput}
            />
            <Button
                variant="outlined"
                component={Link}
                href={"/search"}
                onClick={() => searchData(input)}
            >
                Search
            </Button>
        </Grid>
    );
}
