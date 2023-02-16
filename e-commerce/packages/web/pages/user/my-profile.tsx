import axios from "axios";
import { useEffect } from "react";

export default function MyProfile() {
    let bearer =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiMTIzQDEyMy5jb20iLCJpYXQiOjE2NzY1MDM1MDl9.wr3Uj1wdSndxVvH9riRKgIpL9rt1UALuNQjJO3FKW60";
    async function getUser() {
        const res = await axios.get(`http://localhost:2121/user/my-profile`, {
            headers: { Authorization: bearer },
        });
        console.log(res.data);
        return res.data;
    }

    // useEffect(() => {
    //     console.log(getUser());
    // }, []);
    getUser();

    return <h1>Hello</h1>;
}
