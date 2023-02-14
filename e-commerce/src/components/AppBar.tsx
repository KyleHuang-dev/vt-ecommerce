import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../store/cart/cart.hook";
import CardPreview from "./CartPreview";
import CartIconButton from "./CartIconButton";
import CartDropDown from "./CartDropDown";
import Test from "./test";

export default function NavBar(props) {
    const { sections, title } = props;

    const { cartCount, isCartOpen, setIsCartOpen } = useCart();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Toolbar sx={{ flexWrap: "wrap" }}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    {title}
                </Typography>
                <nav>
                    {sections.map((section) => (
                        <Link
                            key={section.id}
                            variant="button"
                            color="text.primary"
                            href={section.url}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            {section.title}
                        </Link>
                    ))}
                    <CartIconButton />
                    <CartDropDown />
                    <Test />
                </nav>

                <Button href="login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
