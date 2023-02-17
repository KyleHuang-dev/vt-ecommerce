import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import CartPreview from "../components/CartPreview";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../store/cart/cart.hook";
import { useState } from "react";

export default function BasicPopover() {
    const { cartCount, isCartOpen, setIsCartOpen } = useCart();

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
                <CartPreview />
            </Popover>
        </>
    );
}
