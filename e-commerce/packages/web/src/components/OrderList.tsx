import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Order } from "../store/cart/cart.model";
import { Box } from "@mui/material";

interface IOrder {
    id: number;
    totalAmount: number;
}

export default function OrderList({ ordersProp }: IOrder) {
    const { totalAmount, createdAt, userId, orderItems } = ordersProp;
    const [expanded, setExpanded] = useState<string | false>(false);
    const orderItemList = JSON.parse(orderItems);
    const date = new Date(Number(createdAt) * 1000);
    console.log(date);
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
                        Date:
                    </Typography>
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {totalAmount}
                    </Typography>
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        User ID:{userId}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {orderItemList.map((item) => (
                        <Box
                            display={"flex"}
                            justifyContent={"space-around"}
                            key={item.id}
                        >
                            <Typography>ID: {item.id}</Typography>
                            <Typography>{item.name}</Typography>
                            <Typography>x{item.quantity}</Typography>
                        </Box>
                    ))}
                    {/* <Typography>{orderItems}</Typography> */}
                </AccordionDetails>
            </Accordion>
        </>
    );
}
