import { Button, TextField } from "@mui/material";

export default function SearchBar() {
    return (
        <>
            <TextField id="search-bar" label="Search Bar" variant="standard" />
            <Button variant="outlined">Search</Button>
        </>
    );
}
