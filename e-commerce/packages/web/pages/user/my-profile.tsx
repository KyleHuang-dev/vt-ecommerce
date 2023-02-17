import { useUser } from "@/src/store/user/user.hook";
import axios from "axios";
import { useEffect } from "react";

export default function MyProfile() {
    const { currentUser } = useUser();

    const token = currentUser?.access_token;
    const bearer = `Bearer ${token}`;
    async function getUser() {
        const res = await axios.get(`http://localhost:2121/user/my-profile`, {
            headers: { Authorization: bearer },
        });
        console.log(res.data);
        return res.data;
    }

    getUser();

    return <h1>Hello</h1>;
}
