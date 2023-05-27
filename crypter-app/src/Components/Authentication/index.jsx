import { Link } from "react-router-dom"
import sass from './sass/index.scss'
import Logo from '../../assets/logo2.svg'
import { Container, Dropdown } from "react-bootstrap"
import Login from "./Login"
import Register from "./Register"
import { useState } from "react";

const Authentication = () => {
    let [registered, setRegistered] = useState(true);

    return(
        <>
            <div className="Authentication">
                <div className="Authentication-left">
                    <Container>
                        <div className="LanguesBar">
                            <span>
                                <img src={Logo} alt="" /> Crypter
                            </span>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" /> 
                                    <b id="launges">UK</b>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="UK">UK</Dropdown.Item>
                                    <Dropdown.Item id="RU">RU</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        <Container>
                        <div className={registered ? 'visible' : 'invisible'}>
                            <Login />
                        </div>
                        <div className={registered ? 'invisible' : 'visible'}>
                            <Register />
                        </div>
                        </Container>
                    </Container>
                </div>
                <div className="Authentication-right">
                    <button onClick={() => { setRegistered(true) }}>ВОЙТИ</button>
                    <button onClick={() => { setRegistered(false) }}>СОЗДАТЬ АККАУНТ</button>
                    <p>Go anywhere you want in a Crypter full of wonders</p>
                </div>
            </div>
        </>
    )
}

export default Authentication