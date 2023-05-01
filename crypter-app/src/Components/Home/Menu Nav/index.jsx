import header from './sass/header.scss'
import nav from './sass/nav.scss'
import LeftNavBar from './Left_and_right_Bars/LeftNavBar'
import RightNavBar from './Left_and_right_Bars/RightNavBar'
import Big_NavBar from './Big_NavBar'
const NavBar = () => {
    return(
       <>
        <header style={header}>
             <div>
                 <LeftNavBar />
             </div>
             <div>
                 <div className="line"></div>
             </div>
             <div>
                 <RightNavBar />
             </div>
        </header>
        <nav style={nav}>
            <Big_NavBar />
        </nav>
       </>  
    )
}

export default NavBar