import { Outlet, Link } from "react-router-dom";
const RightNavBar = () => {
    return(
       <>
        <div className="navbar-right">
            <div>
                <ul>
                    <li>
                        <Link to='/Discover'>DISCOVER</Link>
                    </li>
                    <li> FEED </li>
                    <li> <button>connect wallet</button> </li>
                    {/* <li> */}
                        <div className="burger-menu">
                            <div className="burger-liner"></div>
                            <div className="burger-liner"></div>
                        </div>
                    {/* </li> */}
                </ul>
            </div>
        </div>
       </> 
    )
}

export default RightNavBar