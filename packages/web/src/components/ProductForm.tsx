import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAdmin } from "../store/admin/admin.hooks";
import TextFieldProps from "@/utils/TextFieldProps";
import { PropaneSharp } from "@mui/icons-material";

export interface IProduct {
    readonly id?: number;
    readonly name: string;
    readonly price: number;
    readonly category: string;
    readonly imageUrl: string;
    // readonly description?: string;
}

const ProductForm = ({
    product,
    id,
    onClose,
}: {
    product?: IProduct;
    id?: number;
    onClose: () => void;
}) => {
    const { createAdminProduct, updateAdminProductById } = useAdmin();

    const onSubmitHandler = (values: IProduct) => {
        if (id) updateAdminProductById(id, { ...values, id });
        if (!product) createAdminProduct(values);
        onClose();
    };

    return (
        <Grid
            sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h5">Product Information</Typography>
            <Formik
                initialValues={{
                    name: product?.name || "",
                    price: product?.price || 0,
                    category: product?.category || "",
                    imageUrl: product?.imageUrl || "",
                    // description: product?.description || "",
                }}
                onSubmit={(values: IProduct) => onSubmitHandler(values)}
            >
                <Form>
                    <Grid>
                        <Grid>
                            <label htmlFor="">Name: </label>
                            <Field
                                margin="normal"
                                id="name"
                                name="name"
                                label="Product Name"
                                // value={product?.name}
                                // component={TextField}
                            />
                        </Grid>
                        <Grid>
                            <label htmlFor="">Price: </label>
                            <Field
                                margin="normal"
                                id="price"
                                type="number"
                                name="price"
                                label="Product Price"
                                // value={product?.price}
                                // component={TextField}
                            />
                        </Grid>
                        <Grid>
                            <label htmlFor="">Category: </label>
                            <Field
                                margin="normal"
                                id="category"
                                name="category"
                                label="Product Category"
                                // value={product?.category}
                                // component={TextField}
                            />
                        </Grid>
                        <Grid>
                            <label htmlFor="">Image URL: </label>
                            <Field
                                margin="normal"
                                id="imageUrl"
                                name="imageUrl"
                                label="Product Image Url"
                                // value={product?.imageUrl}
                                // component={TextField}
                            />
                        </Grid>

                        {/* 
                    <label htmlFor="description">description</label>
                    <Field
                        id="description"
                        name="description"
                        placeholder="P description"
                    /> */}

                        <button type="submit">Submit</button>
                    </Grid>
                </Form>
            </Formik>
        </Grid>
    );
};
export default ProductForm;
