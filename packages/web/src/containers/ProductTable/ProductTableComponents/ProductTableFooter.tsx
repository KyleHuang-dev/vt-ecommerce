import { Button, TableCell, TableFooter, Typography } from "@mui/material";

export interface IProductTableFooter {
    readonly cartTotal: number;
    readonly isInHistory: boolean;
    readonly checkOutHandler: () => void;
}

export default function ProductTableFooter(props: IProductTableFooter) {
    const { isInHistory, cartTotal, checkOutHandler } = props;
    if (isInHistory) return null;
    return (
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
    );
}
