import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useAdmin } from "@/src/store/admin/admin.hooks";
import OrderList from "@/src/components/OrderList";
import { useEffect, useState } from "react";
import { Order } from "@/src/store/cart/cart.model";
import ProductsTable from "@/src/components/ProductsTable";

interface IType {
    readonly ordersProp: Order[];
}

export default function AdminPage() {
    const { orders, fetchAllOrders, fetchAdminProducts, adminProducts } =
        useAdmin();

    const [value, setValue] = useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchAdminProducts();
    }, []);
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
                            <Tab
                                label="All Products"
                                value="1"
                                onClick={() => fetchAdminProducts()}
                            />
                            <Tab
                                label="All orders"
                                value="2"
                                onClick={() => fetchAllOrders()}
                            />
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
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </>
    );
}

// export async function getServerSideProps() {}
