import '../../../UI/style.scss'
import nav_sass from './sass/nav.scss';
import left_img from '../../../assets/images/left_nav.png'

import next from '../../../assets/images/next.svg'
import circle from '../../../assets/icons/placeholder.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const createWork = (props) => {
    return(
        <>
            <div className="nav-create-work" style={nav_sass}>
                    
                <div className="createWork-top">
                    <Container fluid='xl'>
                        <Row>
                            <Col>
                                <div className="createWork-top-left">
                                    <h1 className='large-text'>Curated Artwork</h1>
                                    <button><img src={next}/></button>
                                </div>
                            </Col>
                            <Col>
                                <div className="createWork-top-right">
                                    <span>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.</span>
                                    <div>
                                        <p>start your search</p> 
                                        <img src={circle} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                    <div className="createWork-bottom">
                        <div className="creatework-bottom-left">
                            <img src={left_img} alt="none"/>
                        </div>
                        <div className="creatework-bottom-right">
                            <div className="balance">
                                <div className="balance-items">
                                    <span>Collection</span>
                                    <div>
                                        <img src={circle} alt="" />
                                        <b>Escape II</b>
                                    </div>
                                </div>
                                <div className="balance-items">
                                    <span>Buy now</span>
                                    <div>
                                        <img src={circle} alt="" />
                                        <b>10.00 ETH</b>
                                    </div>
                                </div>
                                <div className="balance-items last-balance">
                                    <span>Reserve</span>
                                    <div>
                                        <img src={circle} alt="" />
                                        <b>2.38 ETH</b>
                                    </div>
                                </div>    
                            </div>
                            <div className="creatework-bottom-right-bottom">
                                <h1>The creator network.</h1>
                                <Button variant="outline-dark">View NFT &#x2799; </Button>
                                <Button variant="dark">place a bid</Button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default createWork