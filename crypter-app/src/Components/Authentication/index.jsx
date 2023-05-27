import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg'
import sass from './sass/index.scss'
import { Container } from "react-bootstrap"

const Authentication = () => {
    return(
        <>
            <div className="Authentication">
                <div className="Authentication-left">
                    <Container>
                        <div className="LanguesBar">
                            <span>
                                <img src={Logo} alt="" /> Crypter
                            </span>
                            <select id="cars">
                                <option value="EN" selected> EN</option>
                                <option value="RU">RU</option>
                            </select>
                        </div>
                        <Container>
                            <div className="login">
                                <h1>Hi there!</h1>
                                <p>Welcome to Crypter. Largest NFT market</p>
                                <button> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="Google"/> Login with Google </button>
                                <div className="line"></div>
                                <span>or</span>
                                <div className="line"></div>
                                <form action="">
                                    <input type="email"  placeholder="Your email"/>
                                    <input type="password"  placeholder="Password"/>
                                    <span>Forgot password?</span>
                                    <button>Log in</button>
                                    <p>Don't have an accoutn? <span>Sign Up</span></p>
                                </form>
                            </div>  
                        </Container>
                    </Container>
                </div>
                <div className="Authentication-right">
                    <img src="https://v2.cimg.co/news/100430/248406/polina-kondrashova-fhrwah2hmnm-unsplash.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Authentication