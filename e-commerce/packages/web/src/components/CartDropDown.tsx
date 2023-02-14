import Popover from "@mui/material/Popover";
import { Badge, Button } from "@mui/material";
import CartPreview from "./CartPreview";
import { useCart } from "../store/cart/cart.hook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export default function MouseOverPopover() {
    const { isCartOpen, setIsCartOpen } = useCart();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(isCartOpen);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <Button
                aria-describedby={id}
                variant="outlined"
                onClick={handleClick}
            >
                <Badge badgeContent={5} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </Button>
            <Popover
                id={id}
                open={open}
                // anchorEl={isCartOpen}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <CartPreview />;
            </Popover>
        </>
    );
}
