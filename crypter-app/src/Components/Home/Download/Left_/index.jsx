import apple from '../../../../assets/icons/apple.svg'
import google from '../../../../assets/icons/google.svg'
import scss from '../sass/left.scss'
import { Container } from 'react-bootstrap'
const Download = () => { 
    return(
        <>
            <div className="Download">
                <Container>
                    <div className="Download_top">
                        <h1>Download</h1>
                    </div>
                    <div className="Download_bottom">
                        <p>In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time. </p>
                        <div>
                            <button>apple store<img src={apple} alt="" /></button>
                            <button>google play<img src={google} alt="" /></button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Download
