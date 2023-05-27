import scss from './sass/login.scss';
import { Link } from 'react-router-dom';
const Register = () => {
    return(
        <>
            <div class="login-box">
                <h2>Register</h2>
                <form>
                    <div class="user-box">
                        <input type="email" required/>
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div class="user-box">
                        <input type="text" required/>
                        <label>UserName</label>
                    </div>
                    <Link to='/'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    Submit
                    </Link>
                    
                </form>
            </div>
        </>
    )
}

export default Register