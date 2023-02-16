import DeleteItemButton from "../components/DeleteItemButton";
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
    const isCartEmpty = cartItems.length > 0 ? false : true;

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
                    {isCartEmpty ? "No item in the Cart" : "Items in the cart"}
                </Typography>
                <Grid>
                    <List>
                        {cartItems.map((item) => (
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteItemButton item={item} />
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

                <Button
                    component={Link}
                    href={isCartEmpty ? "/" : "/cart"}
                    variant="contained"
                >
                    {isCartEmpty ? "Continue Shopping" : "Check Cart"}
                </Button>
            </Grid>
        </Box>
    );
}
