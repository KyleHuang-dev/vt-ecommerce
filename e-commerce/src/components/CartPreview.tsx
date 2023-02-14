import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../store/cart/cart.hook";
import {
    Button,
    CardMedia,
    Typography,
    Grid,
    IconButton,
    ListItemText,
    ListItemAvatar,
    ListItem,
    List,
    Box,
} from "@mui/material";
import Link from "next/link";

export default function CardPreview() {
    const { cartItems, clearItemFromCart } = useCart();

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid
                display="flex"
                direction="column"
                justifyContent="center"
                item
                xs={12}
                md={6}
            >
                <Typography sx={{ m: 2 }} variant="h6" component="div">
                    {cartItems.length > 0
                        ? "Items in the cart"
                        : "No item in the Cart"}
                </Typography>
                <Grid>
                    <List>
                        {cartItems.map((item) => (
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon
                                            onClick={() =>
                                                clearItemFromCart(
                                                    cartItems,
                                                    item
                                                )
                                            }
                                        />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    {" "}
                                    <CardMedia
                                        sx={{ height: 50 }}
                                        image={item.imageUrl}
                                        title={item.name}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    secondary={item.price}
                                />
                                <Typography variant="h6">
                                    x {item.quantity}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Button component={Link} href="/cart" variant="contained">
                    Check Cart
                </Button>
            </Grid>
        </Box>
    );
}
