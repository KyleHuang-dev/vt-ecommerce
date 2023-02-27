import DeleteItemButton from "@/src/components/DeleteItemButton";
import ProductForm from "@/src/components/ProductForm";
import QuantityButtonGroup from "@/src/components/QuantityButtonGroup";
import { useAdmin } from "@/src/store/admin/admin.hooks";
import { CartItem, ProductItem } from "@/src/store/cart/cart.model";
import {
    Button,
    CardMedia,
    TableBody,
    TableCell,
    TableRow,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface IProductTableBody {
    readonly products: ProductItem[] | CartItem[];
    readonly isInHistory: boolean;
    readonly isInAdmin?: boolean;
}
export default function ProductTableBody(props: IProductTableBody) {
    const { products, isInHistory, isInAdmin } = props;
    const { deleteAdminProductById } = useAdmin();

    const [showForm, setShowForm] = useState(false);
    const showFormHandler = () => {
        setShowForm(!showForm);
    };
    return (
        <>
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
                                <Button
                                    color="warning"
                                    onClick={showFormHandler}
                                >
                                    Edit
                                </Button>
                                <Button
                                    color="error"
                                    onClick={() =>
                                        deleteAdminProductById(row.id)
                                    }
                                >
                                    Delete
                                </Button>
                                {showForm && (
                                    <div>
                                        <ProductForm
                                            product={row}
                                            id={row.id}
                                        />
                                    </div>
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </>
    );
}
