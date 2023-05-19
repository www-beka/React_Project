import Card from './Cards'
import UserAvatar from '../../../assets/images/User(4).png'
import ColorImg from '../../../assets/icons/Colors.svg' 
import scss from './sass/index.scss'
import light from '../../../assets/icons/light.svg'
import CardImg_1 from '../../../assets/images/Cards/Cards_1.png'
import CardImg_2 from '../../../assets/images/Cards/Cards_2.png'
import CardImg_3 from '../../../assets/images/Cards/Cards_3.png'
import CardImg_4 from '../../../assets/images/Cards/Cards_4.png'
import CardImg_5 from '../../../assets/images/Cards/Cards_5.png'
import CardImg_6 from '../../../assets/images/Cards/Cards_6.png'
import CardImg_7 from '../../../assets/images/Cards/Cards_7.png'
import CardImg_8 from '../../../assets/images/Cards/Cards_8.png'
import CardImg_9 from '../../../assets/images/Cards/Cards_9.png'
import CardImg_10 from '../../../assets/images/Cards/Cards_10.png'
import CardImg_11 from '../../../assets/images/Cards/Cards_11.png'
import CardImg_12 from '../../../assets/images/Cards/Cards_12.png'
import AuctionsendingSccren from '../../Home/Auctionsending-sccren'

import { Container, Row, Col } from 'react-bootstrap'

const Discover_Card_Sections = () => {
    return(
        <>
            <div className="Discover_Card_Sections">
                <Container>
                    <div className="Discover_Card_Sections_title">
                        <div>
                            <h1>NFTs</h1> 
                        </div>
                        <div>
                            <span>1 days</span>
                            <span>7 days</span>
                            <span>30 days</span>
                            <img src={light} alt="" />
                        </div>
                    </div>
                    {/* row have margin-top = 80px */}
                    <Row>
                        <Col>
                            <Card 
                                img = {CardImg_1}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_2}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_3}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_4}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card 
                                img = {CardImg_5}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_6}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_7}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_8}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card 
                                img = {CardImg_9}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_10}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_11}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                        <Col>
                            <Card 
                                img = {CardImg_12}
                                User = {UserAvatar}
                                UserName = '@elnafrederick'
                                Colors = {ColorImg}
                                BidPrice = 'Current bid'
                                Bid = '0.4321 ETH'
                                Price = 'Buy now'
                                Cash = '2.00 ETH'
                            />
                        </Col>
                    </Row>
                    <center>
                        <div>
                            <button>load more</button>
                        </div>  
                    </center>
                </Container>
            </div>
            <AuctionsendingSccren />
        </>
    )
}

export default Discover_Card_Sections