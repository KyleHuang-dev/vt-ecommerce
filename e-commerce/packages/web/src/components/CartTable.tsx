import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../store/cart/cart.hook";
import DeleteItemButton from "../components/DeleteItemButton";
import { Button, CardMedia, TableFooter, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";
import IncreaseButton from "../components/IncreaseButton";
import DecreaseButton from "../components/DecreaseButton";

export default function BasicTable() {
    const { cartItems, cartTotal, checkOut } = useCart();
    const checkOutHandler = () => {
        console.log("check Out, and Total: ", cartTotal);
        checkOut(cartItems);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <CardMedia
                                    sx={{ height: 50, width: 50 }}
                                    image={row.imageUrl}
                                    title={row.name}
                                />
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">
                                <DecreaseButton product={row} />
                                {row.quantity}
                                <IncreaseButton product={row} />
                            </TableCell>
                            <TableCell align="center">
                                <DeleteItemButton item={row} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                        <Typography variant="h5" component="div">
                            Your total is:
                        </Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Typography variant="h5" component="div">
                            {cartTotal}
                        </Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Button onClick={checkOutHandler}>Check Out</Button>
                    </TableCell>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
