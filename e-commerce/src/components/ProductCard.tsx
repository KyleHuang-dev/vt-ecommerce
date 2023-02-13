import { useRouter } from "next/router";
import AddToCart from "./AddToCart";
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
import { useCart } from "../store/cart/cart.hook";

export default function ProductCard({ products }) {
    const router = useRouter();
    const productList = products;
    const { addItemToCart, cartItems } = useCart();

    return productList.map((product) => (
        <Grid key={product.id} item xs={4}>
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={product.imageUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>
                    <Button
                        onClick={() => router.push(`items/${product.id}`)}
                        size="small"
                    >
                        View Detail
                    </Button>
                </CardContent>
                <CardActions>
                    <AddToCart product={product} />
                </CardActions>
            </Card>
        </Grid>
    ));
}
