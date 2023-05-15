import { Container, Row, Col, Button } from "react-bootstrap"
import Crypto_Calculator from "../../../assets/images/Crypto_Calculator.png"
import Saving_Money from "../../../assets/images/Saving_Money.png"
import VR from "../../../assets/images/VR.png"
import Circle from "../../../assets/icons/placeholder.svg"
import scss from './sass/index.scss'

const YourCreative = () => {
    return(
        <>
            <div className="YourCreative_sccren">
                <Container>
                    <div className="title_yourCreative_sccren">
                        <h1>Own your creativity.</h1>
                        <p>Each web3 community is unique and deserves a custom marketplace with its own look, features, fees.</p>
                    </div>
                    <Row>
                        <Col>
                            <div className="youCreative_img_1">
                                <img src={VR} alt="" width={650}/>
                            </div>
                        </Col>
                        <Col>
                            <div className="Description">
                                <h1>Your Collection,your way.</h1>
                                <p>In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time.</p>
                                <span><img src={Circle} alt="" /> You’ll earn a 10% royalty for all secondary market sales.</span>
                                <span><img src={Circle} alt="" /> Creativity is valuable on Crypter</span>
                                <Button variant="outline-dark">learn more</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="Description">
                                <h1>Lowestmint fees</h1>
                                <p>Minting an NFT is like adding your signature to a painting. Make your mark in web3 with works that are emblematic of your creative practice.
                                    Plus, you’ll earn a 10% royalty for all secondary market sales. Forever.</p>
                                <Button variant="outline-dark">learn more</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className="youCreative_img_2">
                                <img src={Saving_Money} alt=""  width={650}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="youCreative_img_3">
                                <img src={Crypto_Calculator} alt=""  width={650}/>
                            </div>
                        </Col>
                        <Col>
                            <div className="Description">
                                <h1>Create together, earn together.</h1>
                                <p>Add a Split to your NFT to seamlessly pay creative collaborators—photographers, producers, choreographers, dancers, poets—and so on.
                                    You can also use Splits to donate directly to the causes you care about most. That’s the web3 way.</p>
                                <Button variant="outline-dark">learn more</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default YourCreative