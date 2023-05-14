import scss from '../sass/index.scss';
import { Container } from 'react-bootstrap';
import UI from '../../../../UI/style.scss'
const Auctionsending_Left = () => {
    return(
        <>
            <div className="Auctionsending_Left">
                {/* <Container> */}
                    <div className="Auctionsending_Left_info">
                        <div>
                            <h1>Auctionsending soon</h1>    
                        </div>
                        <div>
                            <button className='explorer_more_btn'>
                                explorer more
                                <div>109</div>
                            </button>
                        </div>
                    </div>
                {/* </Container> */}
            </div>
        </>
    )
}

export default Auctionsending_Left