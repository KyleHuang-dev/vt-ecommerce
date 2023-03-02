import { Button } from "@mui/material";
import { useUser } from "../store/user/user.hook";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginOrOutButton() {
    const router = useRouter();
    const { currentUser, logOutUser } = useUser();

    const logoutHandler = () => {
        logOutUser();
        router.push("/");
    };
    return currentUser ? (
        <Button
            onClick={logoutHandler}
            variant="outlined"
            color="error"
            sx={{ my: 1, mx: 1.5 }}
        >
            Logout
        </Button>
    ) : (
        <Button
            component={Link}
            href="login"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
        >
            log in
        </Button>
    );
}
