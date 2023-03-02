import { TableCell, TableHead, TableRow } from "@mui/material";

interface IProductTableHead {
    readonly isInHistory: boolean;
    readonly isInAdmin?: boolean;
}

export default function ProductTableHeader(props: IProductTableHead) {
    const { isInHistory, isInAdmin } = props;
    return (
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
    );
}
