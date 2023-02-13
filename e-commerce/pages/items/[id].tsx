import { useRouter } from "next/router";

export default function DynamicRoute() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <>
            <h1>{id}</h1>
        </>
    );
}
