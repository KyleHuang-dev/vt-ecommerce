import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useCart } from "../store/cart/cart.hook";
import CartIconButton from "../containers/CartIconButton";
import LoginOrOutButton from "../components/LoginOrOutButton";

interface IProps {
    title: string;
    sections: { title: string; url: string }[];
}

export default function NavBar(props: IProps) {
    const { title, sections } = props;
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
                            key={section.title}
                            variant="button"
                            color="text.primary"
                            href={section.url}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            {section.title}
                        </Link>
                    ))}
                    <CartIconButton />
                </nav>

                <LoginOrOutButton />
            </Toolbar>
        </AppBar>
    );
}
