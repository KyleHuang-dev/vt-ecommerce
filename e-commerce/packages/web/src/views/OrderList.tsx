import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { CartItem, Order, ProductItem } from "../store/cart/cart.model";

import ProductsTable from "../containers/ProductTable/ProductsTable";

interface IOrderList {
    readonly order: Order;
}

export default function OrderList({ order }: IOrderList) {
    const { createdAt, userId, orderItems, totalAmount } = order;

    const [expanded, setExpanded] = useState<string | false>(false);
    const orderItemList: CartItem[] = JSON.parse(orderItems);
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
                    <ProductsTable
                        products={orderItemList}
                        isInHistory={true}
                    />
                </AccordionDetails>
            </Accordion>
        </>
    );
}
