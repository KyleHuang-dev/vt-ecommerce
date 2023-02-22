import { Button } from "@mui/material";
import { useUser } from "../store/user/user.hook";
import Link from "next/link";
import { useRouter } from "next/router";
import { type } from "os";

export default function LoginOrOutButton() {
    const router = useRouter();
    const { currentUser, logOutUser } = useUser();

    const logoutHandler = () => {
        logOutUser();
        router.push("/");
    };
    const loginHandler = () => {
        router.push("/login");
    };

    // interface IButtonProp {
    //     clickHandler: () => void;
    //     variant?: string;
    //     color?: string;
    // }

    // let buttonProp: IButtonProp ={
    //     clickHandler: loginHandler,
    //     variant: "outlined",
    //     color: "primary",
    // }

    // if (!currentUser) {
    //     buttonProp = {
    //         clickHandler: logoutHandler,
    //         variant: "outlined",
    //         color: "error",
    //     };

    // const{clickHandler, variant, color} = buttonProp
    return currentUser ? (
        <Button
            onClick={() => logoutHandler}
            variant="outlined"
            color="error"
            sx={{ my: 1, mx: 1.5 }}
        >
            Logout
        </Button>
    ) : (
        <Button
            onClick={loginHandler}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
        >
            log in
        </Button>
    );
}
