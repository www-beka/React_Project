import CardSection from "./CardsSections"
import scss from './sass/index.scss'
import UI from '../../../UI/style.scss'
import { Container } from "react-bootstrap"
const Spotlight_Sccren = () => {
    return(
        <>
            <div className="Spotlight_Sccren">
                <Container>
                    <div>
                        <h1>Spotlight. </h1>
                        <p>Projects you'll love</p>
                    </div>
                    <div>
                        <CardSection/>
                    </div>
                    <div>
                        <button className='explorer_more_btn'>
                            explorer more
                            <div>109</div>
                        </button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Spotlight_Sccren