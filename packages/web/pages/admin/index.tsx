import { useAdmin } from "@/src/store/admin/admin.hooks";
import { useEffect, useState } from "react";
import { Order } from "@/src/store/cart/cart.model";

import { ProductItem } from "@/src/store/admin/admin.model";
import { useRouter } from "next/router";
import AdminBody from "@/src/views/AdminBody";
import axios from "axios";
import { useUser } from "@/src/store/user/user.hook";

export interface IUser {
    id: number;
    email: string;
    hash: string;
    isAdmin: boolean;
    orders: Order[];
    userName: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export default function AdminPage() {
    const { currentUser } = useUser();
    const [admin, setAdmin] = useState<boolean>(false);

    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    useEffect(() => {
        async function getAdmin() {
            try {
                const res = await axios.get(
                    //put it in env
                    `http://localhost:2121/admin`,
                    {
                        headers: { Authorization: bearer },
                    }
                );
                setAdmin(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAdmin();
    }, []);

    const { orders, fetchAdminProducts, adminProducts, fetchAllOrders } =
        useAdmin();

    useEffect(() => {
        fetchAdminProducts();
        fetchAllOrders();
    }, []);

    return (
        <>
            {admin ? (
                <AdminBody adminProducts={adminProducts} orders={orders} />
            ) : (
                <h1>You don't have admin access.</h1>
            )}
        </>
    );
}
