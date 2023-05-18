import { Outlet, Link } from "react-router-dom";
import NavBar from "./Home/Menu Nav";

const Layout = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
};

export default Layout;