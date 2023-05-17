import { Outlet, Link } from "react-router-dom";
import NavBar from "./Home/Menu Nav";

const Layout = () => {
    return (
        <>
        <NavBar />
            <nav>
                <ul>
                    <li>
                        <Link to="/NoPage"></Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;