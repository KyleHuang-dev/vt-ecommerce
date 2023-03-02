import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

import { ReactNode, useState } from "react";
import { ProductItem } from "../store/admin/admin.model";
import { CartItem } from "../store/cart/cart.model";

interface IEditPoppover {
    readonly children: ReactNode;
    readonly product: ProductItem | CartItem;
    readonly Component: () => JSX.Element;
    readonly title: string | JSX.Element;
}

export default function GenPopover({
    children,
    Component,
    title,
    product,
}: IEditPoppover) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <Button
                aria-describedby={id}
                color="primary"
                // variant="contained"
                onClick={handleClick}
            >
                {title}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                {
                    <Component
                        product={product}
                        id={product.id}
                        onClose={handleClose}
                    />
                }
                {children}
                {/* <ProductForm product={product} id={product.id} /> */}
            </Popover>
        </>
    );
}
