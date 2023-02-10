import AppBar from "./AppBar";


export default function Layout({children}) { 
    return (
        <>
            <AppBar />
            <div>
                {children}
            </div>
        </>
        
    )
}
