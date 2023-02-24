import OrderList from "@/src/components/OrderList";
import { Order } from "@/src/store/cart/cart.model";
import { useUser } from "@/src/store/user/user.hook";
import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
    id: number;
    email: string;
    hash: string;
    isAdmin: boolean;
    orders: Order[];
    userName: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export default function MyProfile() {
    const { currentUser } = useUser();
    const [user, setUser] = useState<IUser>({} as IUser);

    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    useEffect(() => {
        async function getUser() {
            const res = await axios.get(
                //put it in env
                `http://localhost:2121/user/my-profile`,
                {
                    headers: { Authorization: bearer },
                }
            );
            console.log(res.data);
            setUser(res.data);
        }

        getUser();
    }, []);

    const { userName, email, orders, isAdmin } = user;

    return !currentUser ? (
        <h1>login fist</h1>
    ) : (
        <>
            <h1>Hello {userName}</h1>
            <h1>{email}</h1>
            {isAdmin ? <a href="/admin">Admin</a> : <></>}
            {!orders
                ? null
                : orders.map((order) => (
                      <OrderList props={order} key={order.id} />
                  ))}
        </>
    );
}
