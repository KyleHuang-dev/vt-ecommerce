import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import ProductsTable from "../containers/ProductTable/ProductsTable";
import OrderList from "./OrderList";
import ProductForm from "../components/ProductForm";
import { Order, ProductItem } from "../store/admin/admin.model";

interface IAdmin {
    readonly adminProducts: ProductItem[];
    readonly orders: Order[];
}
export default function AdminBody({ adminProducts, orders }: IAdmin) {
    const [value, setValue] = useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h3">Admin Page</Typography>

            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="All Products" value="1" />
                            <Tab label="All orders" value="2" />
                            <Tab label="Add Product" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <ProductsTable
                            products={adminProducts}
                            isInHistory={true}
                            isInAdmin={true}
                        />
                    </TabPanel>
                    <TabPanel value="2">
                        {orders.map((order) => (
                            <OrderList order={order} key={order.id} />
                        ))}
                    </TabPanel>
                    <TabPanel value="3">
                        <ProductForm onClose={() => setValue("1")} />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
}
