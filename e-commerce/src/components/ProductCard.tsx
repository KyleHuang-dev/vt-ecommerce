import AddToCart from "./AddToCart";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
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
                        component={Link}
                        href={`/items/${product.id}`}
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
    );
}
