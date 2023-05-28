import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const RightNavBar = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
       <>
        <div className="navbar-right">
            <div>
                <ul>
                    <li>
                        <Link>Login</Link> 
                    </li>
                    <li> 
                        <span>
                            <Link to='/Authentication'>Sign Up</Link>
                        </span>
                    </li>
                    {/* <li> */}
                        <div className="burger-menu" variant="primary" onClick={handleShow}>
                            <div className="burger-liner"></div>
                            <div className="burger-liner"></div>
                            <div className="burger-liner"></div>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} {...props} placement='end'>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Pages</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                                <li>
                                    <Link to='/Discover'>DISCOVER</Link>
                                </li>
                                <li>FEED</li>
                                <li> <button> <Link to='/Connect_Wallet'>connect wallet</Link> </button> </li>
                          </Offcanvas.Body>
                        </Offcanvas>
                    {/* </li> */}
                </ul>
            </div>
        </div>
       </> 
    )
}

export default RightNavBar