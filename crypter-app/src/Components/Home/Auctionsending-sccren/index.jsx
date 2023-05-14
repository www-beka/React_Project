import { Col, Container, Row } from 'react-bootstrap'
import Left from './Left-componrnts'
import Right from './Right-components'
const UserCollections = () => {
    return(
        <>
          <div className="Auctionsending-sccren">
                <Row>
                  <Col>
                      <div>
                        <Left />
                      </div>
                  </Col>
                  <Col>
                      <div>
                        <Right />
                      </div>
                  </Col>
                </Row>
          </div>
        </>
    )
}


export default UserCollections