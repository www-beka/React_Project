import Logo from '../../../../assets/logo.svg'
import { Outlet, Link } from "react-router-dom";
import scss from '../sass/header.scss';    
const LeftNavBar = () => {
    return(
       <>
          <div className="navbar-left">
            <div className="navbar-logo">
                <div>
                    <Link to='/'>
                        <img src={Logo} />
                        <span>crypter</span>    
                    </Link> 
                </div>
            </div>  
          </div>
       </> 
    )
}

export default LeftNavBar