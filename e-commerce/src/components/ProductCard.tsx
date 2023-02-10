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

export default function ProductCard({ products }) {
    const productList = products;

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
                    <Button size="small">View Detail</Button>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
            </Card>
        </Grid>
    ));
}
