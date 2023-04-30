import LeftNavBar from './Left_and_right_Bars/LeftNavBar'
import RightNavBar from './Left_and_right_Bars/RightNavBar'
const NavBar = () => {
    return(
       <>
       <nav>
            <div>
                <LeftNavBar />
            </div>
            <div>
                <RightNavBar />
            </div>
       </nav>
       </> 
    )
}

export default NavBar