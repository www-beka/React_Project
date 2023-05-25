import { Outlet, Link } from "react-router-dom";
import NavBar from "./Home/Menu Nav";
import Footer from "./Home/Footer";
import Download from "./Home/Download";

const Layout = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        <Download />
        <Footer />
        </>
    )
};

export default Layout;