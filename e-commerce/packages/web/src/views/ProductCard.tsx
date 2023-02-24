import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { CartItem } from "../store/cart/cart.model";
import { truncate } from "../../utils/helper";
import AddToCartSwitchButton from "../containers/AddToCartSwitchButton";

interface ICartItem {
    readonly product: CartItem;
}

const ProductCard = ({ product }: ICartItem) => {
    const { id, name, imageUrl, price, description } = product;

    return (
        <Grid container sx={{ p: 1 }} xs={12} lg={6}>
            <CardActionArea>
                <Card sx={{ display: "flex", height: "100%" }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 450,
                            display: { xs: "none", sm: "block" },
                        }}
                        image={imageUrl}
                        alt={name}
                    />
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography component="h2" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            ${price}
                        </Typography>
                        <Typography variant="subtitle2" paragraph>
                            {truncate(description, 120)}
                            <Button
                                component={Link}
                                href={`/products/${id}`}
                                size="small"
                            >
                                View Detail
                            </Button>
                        </Typography>
                        <CardActions>
                            <AddToCartSwitchButton product={product} />
                        </CardActions>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default ProductCard;
