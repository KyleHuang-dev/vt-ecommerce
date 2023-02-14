import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../store/cart/cart.hook";
import { Button, CardMedia } from "@mui/material";

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        })
    );
}

export default function CardPreview() {
    const { cartItems } = useCart();

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Items in the cart
                </Typography>
                <Grid>
                    <List>
                        {cartItems.map((item) => (
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
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
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
            <Button>Check Cart</Button>
        </Box>
    );
}
