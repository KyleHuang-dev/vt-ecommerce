import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../store/cart/cart.hook";
import DeleteItemButton from "./DeleteItemButton";
import { Button, CardMedia, TableFooter, Typography } from "@mui/material";
import { useUser } from "../store/user/user.hook";
import { CartItem, ProductItem } from "../store/cart/cart.model";
import QuantityButtonGroup from "./QuantityButtonGroup";
import { Category } from "@mui/icons-material";
import Link from "next/link";

interface IProductTable {
    readonly products: ProductItem[] | CartItem[];
    readonly isInHistory: boolean;
    readonly isInAdmin?: boolean;
}

export default function ProductsTable(props: IProductTable) {
    const { products, isInHistory, isInAdmin = false } = props;

    const { cartTotal, CheckOutOrder } = useCart();
    const { currentUser } = useUser();
    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    const cartItemsStr = JSON.stringify(products);
    const checkOutHandler = async () => {
        CheckOutOrder(cartTotal, cartItemsStr, bearer);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {isInAdmin && <TableCell align="center">ID</TableCell>}
                        <TableCell>Image</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">
                            {isInAdmin ? "Category" : "Quantity"}
                        </TableCell>
                        {(!isInHistory || isInAdmin) && (
                            <TableCell align="center">Action</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            {isInAdmin && (
                                <TableCell align="center">{row.id}</TableCell>
                            )}

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
                                {isInAdmin ? (
                                    row.category
                                ) : isInHistory ? (
                                    row.quantity
                                ) : (
                                    <QuantityButtonGroup product={row} />
                                )}
                            </TableCell>

                            {isInHistory ? null : (
                                <TableCell align="center">
                                    <DeleteItemButton item={row} />
                                </TableCell>
                            )}
                            {isInAdmin && (
                                <TableCell align="center">
                                    <Button
                                        component={Link}
                                        href={`/products/${row.id}`}
                                    >
                                        Detail
                                    </Button>
                                    <Button color="warning">Edit</Button>
                                    <Button color="error">Delete</Button>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
                {isInHistory ? null : (
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
                )}
            </Table>
        </TableContainer>
    );
}
