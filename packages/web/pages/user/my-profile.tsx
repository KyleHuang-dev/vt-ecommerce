import { Order } from "@/src/store/cart/cart.model";
import { useUser } from "@/src/store/user/user.hook";
import ProfileBody from "@/src/views/ProfileBody";
import axios from "axios";
import { useEffect, useState } from "react";

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

export default function MyProfile() {
    const { currentUser } = useUser();
    const [user, setUser] = useState<IUser>({} as IUser);

    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    useEffect(() => {
        async function getUser() {
            try {
                const res = await axios.get(
                    //put it in env
                    `http://localhost:2121/user/my-profile`,
                    {
                        headers: { Authorization: bearer },
                    }
                );
                console.log(res.data);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
    }, []);

    return !currentUser ? <h1>login fist</h1> : <ProfileBody user={user} />;
}
