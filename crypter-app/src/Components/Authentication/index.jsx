import { Link } from "react-router-dom"
import sass from './sass/index.scss'
import Logo from '../../assets/logo2.svg'
import { Container, Dropdown } from "react-bootstrap"
import Login from "./Login"
import { useState } from "react";

const Authentication = () => {
    const [text, settext] = useState("");

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
                                    <span id="launges">UK</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="UK">UK</Dropdown.Item>
                                    <Dropdown.Item id="RU">RU</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        <Container>
                             <Login />
                        </Container>
                    </Container>
                </div>
                <div className="Authentication-right">
                    <img src="https://v2.cimg.co/news/100430/248406/polina-kondrashova-fhrwah2hmnm-unsplash.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Authentication