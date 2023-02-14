import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../store/cart/cart.hook";
import Popover from "@mui/material/Popover";
import CartPreview from "./CartPreview";
import { Button } from "@mui/material";

export default function CartIconButton() {
    const { cartCount, isCartOpen, setIsCartOpen } = useCart();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsCartOpen(!isCartOpen);
    };

    const handleClose = () => {
        setIsCartOpen(false);
    };

    const open = Boolean(isCartOpen);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <Button
                aria-describedby={id}
                color="primary"
                variant="outlined"
                onClick={handleClick}
            >
                <Badge badgeContent={cartCount} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={isCartOpen}
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
