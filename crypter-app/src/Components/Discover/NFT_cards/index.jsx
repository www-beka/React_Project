import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import scss from './sass/index.scss';
import Discover_Card_Sections from './CardsSections';

const DiscoverCard = () => {
    return(
        <>
            <div className="tab_bar">
                <Container>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">NFTs <span>456,789</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Collections <span>123,987</span> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled">Artist <span>45,678</span> </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
            <main>
                <Discover_Card_Sections />
            </main>

        </>
    )
}


export default DiscoverCard