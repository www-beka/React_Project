import scss from '../sass/right.scss'; 
import { Container } from 'react-bootstrap';
const Newsletter = () => { 
    return(
        <>
            <div className="Newsletter">
                <Container>
                    <div className="Newsletter-top">
                        <h1>Newsletter</h1>
                    </div>
                    <div className="Newsletter-bottom">
                        <form>
                            <label>Get the latest Crypter updates</label>
                            <div>
                                <div class="user-box">
                                    <input type="text" placeholder='UserName'/>
                                </div>
                                <div class="user-box">
                                    <input type="email" placeholder='Email'/>
                                </div>
                            </div>
                            <button>SUBSCRIBE NOW</button>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Newsletter