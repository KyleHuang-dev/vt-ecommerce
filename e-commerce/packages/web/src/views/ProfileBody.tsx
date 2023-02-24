import { IUser } from "@/pages/user/my-profile";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import OrderList from "../components/OrderList";

interface IProfileBody {
    readonly user: IUser;
}

export default function ProfileBody({ user }: IProfileBody) {
    const { userName, email, orders, isAdmin } = user;
    return (
        <>
            <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={3}
            >
                <Grid>
                    <Typography variant="h2">Hello {userName}!</Typography>
                    <Typography variant="h4">Email: {email}</Typography>
                </Grid>
                <Grid>
                    {isAdmin ? (
                        <Button
                            component={Link}
                            size={"large"}
                            variant="contained"
                            color={"primary"}
                            href="/admin"
                        >
                            Go to Admin Page
                        </Button>
                    ) : null}
                </Grid>
            </Grid>
            {!orders
                ? null
                : orders.map((order) => (
                      <OrderList order={order} key={order.id} />
                  ))}
        </>
    );
}
