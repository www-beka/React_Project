import { Link } from "react-router-dom"
import scss from './sass/login.scss'

const Login = () => {
    return(
        <>
            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                    <input type="text" />
                    <label>Username</label>
                    </div>
                    <div class="user-box">
                    <input type="password" />
                    <label>Password</label>
                    </div>
                    <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                    </a>
                </form>
            </div>
        </>
    )
}

export default Login