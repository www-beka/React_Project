import Logo from '../../../../assets/logo.svg'

const LeftNavBar = () => {
    return(
       <>
          <div className="navbar-left">
            <div className="navbar-logo">
                <div>
                    <img src={Logo} /> 
                    <span>crypter</span>    
                </div>
            </div>  
          </div>
       </> 
    )
}

export default LeftNavBar