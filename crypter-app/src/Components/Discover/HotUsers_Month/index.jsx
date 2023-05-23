import HotUsers_Month_Left from "./HotUser_left"
import HotUsers_Month_Right from "./HotUser_right"
import { Row, Col, Container } from "react-bootstrap"
const HotUsers_Month = () => {
    return(
        <>
            <section>
                <HotUsers_Month_Left />
            </section>
            <section>
                <HotUsers_Month_Right />
            </section>
        </>
    )
}

export default HotUsers_Month