import Logo from '../../../../assets/logo.svg'
import Search from '../../../../assets/icons/search.svg'

const LeftNavBar = () => {
    return(
       <>
          <div className="navbar-left">
            <div className="navbar-logo">
                <div>
                    <img src={Logo} /> 
                    <span>crypter</span>    
                </div>
                <div>
                    <img src={Search} />
                </div>
            </div>  
          </div>
       </> 
    )
}

export default LeftNavBar