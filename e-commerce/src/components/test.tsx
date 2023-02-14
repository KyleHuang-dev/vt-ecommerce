import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartPreview from "./CartPreview";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../store/cart/cart.hook";

export default function BasicPopover() {
    const { cartCount, isCartOpen, setIsCartOpen } = useCart();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    console.log("here", anchorEl);

    return (
        <div>
            <Button
                aria-describedby={id}
                color="secondary"
                // variant="contained"
                onClick={handleClick}
            >
                <Badge badgeContent={cartCount} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
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
                <CartPreview />;
            </Popover>
        </div>
    );
}
