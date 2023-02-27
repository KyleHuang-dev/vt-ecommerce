import { Button, TextField } from "@mui/material";
import {
    Formik,
    Field,
    ErrorMessage,
    FieldProps,
    Form,
    FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { useAdmin } from "../store/admin/admin.hooks";
/**
 * Important understanding points.
 * - Always use the formik state, never try to control components with useState
 * - Passing values into initialValues can allow you to populate the form for editing some entity
 * - Validation - Yup
 * - Show warnings: Helper text / ErrorMessage / custom getter function
 * - Nested fields - the name can use dot syntax and even update nested arrays
 */

interface IProduct {
    readonly id?: number;
    readonly name: string;
    readonly price: number;
    readonly category: string;
    readonly imageUrl: string;
    // readonly description?: string;
}

const ProductForm = ({ product, id }: { product?: IProduct; id?: number }) => {
    const { createAdminProduct, updateAdminProductById } = useAdmin();

    const onSubmitHandler = (values: IProduct) => {
        if (id) updateAdminProductById(id, { ...values, id });
        if (!product) createAdminProduct(values);
    };

    return (
        <>
            <h1>Create Product</h1>
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
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Product Name" />

                    <label htmlFor="price">price</label>
                    <Field
                        id="price"
                        type="number"
                        name="price"
                        placeholder="Product Price"
                    />

                    <label htmlFor="category">category</label>
                    <Field
                        id="category"
                        name="category"
                        placeholder="P category"
                    />

                    <label htmlFor="imageUrl">imageUrl</label>
                    <Field
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="P imageUrl"
                    />
                    {/* 
                    <label htmlFor="description">description</label>
                    <Field
                        id="description"
                        name="description"
                        placeholder="P description"
                    /> */}

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};
export default ProductForm;
