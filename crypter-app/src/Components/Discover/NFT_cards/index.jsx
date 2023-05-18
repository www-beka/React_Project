import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import scss from './sass/index.scss';
const DiscoverCard = () => {
    return(
        <>
            <div className="tab_bar">
                <Container>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled">
                            Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>

        </>
    )
}


export default DiscoverCard