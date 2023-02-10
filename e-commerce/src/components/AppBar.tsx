import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CART_ACTION_TYPES } from "../store/cart/cart.model";

export default function NavBar(props) {
    const { sections, title } = props;

    const totalQuantity = useSelector((state) => state.totalQuantity);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: CART_ACTION_TYPES.GET_TOTAL });
    });

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
                            variant="button"
                            color="text.primary"
                            href={section.url}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            {section.title}
                        </Link>
                    ))}

                    <IconButton aria-label="cart">
                        <Badge badgeContent={totalQuantity} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </nav>

                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
