import { useUser } from "@/src/store/user/user.hook";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MyProfile() {
    const { currentUser } = useUser();
    const [user, setUser] = useState({});

    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    useEffect(() => {
        async function getUser() {
            const res = await axios.get(
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

    const { userName, email } = user;

    return !currentUser ? (
        <h1>login fist</h1>
    ) : (
        <>
            <h1>Hello {userName}</h1>
            <h1>{email}</h1>
        </>
    );
}
