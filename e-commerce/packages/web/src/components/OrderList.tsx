import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Order, ProductItem } from "../store/cart/cart.model";
import { Box } from "@mui/material";
import CartTable from "./ProductsTable";
import ProductsTable from "./ProductsTable";
interface IOrder {
    id: number;
    userId: number;
    createAt: string;
    totalAmount: number;
    cartItems: string;
}

export default function OrderList({ props }: IOrder) {
    const { totalAmount, createdAt, userId, orderItems } = props;
    const [expanded, setExpanded] = useState<string | false>(false);
    const orderItemList: ProductItem[] = JSON.parse(orderItems);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Date:{createdAt}
                    </Typography>
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {totalAmount}
                    </Typography>
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        User ID:{userId}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* {orderItemList.map((item) => (
                        <Box
                            display={"flex"}
                            justifyContent={"space-around"}
                            key={item.id}
                        >
                            <Typography>ID: {item.id}</Typography>
                            <Typography>{item.name}</Typography>
                            <Typography>
                                {item.price} x {item.quantity}
                            </Typography>
                        </Box>
                    ))} */}
                    <ProductsTable product={orderItemList} isInHistory={true} />
                </AccordionDetails>
            </Accordion>
        </>
    );
}
