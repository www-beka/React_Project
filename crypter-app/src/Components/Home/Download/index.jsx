import Download from './Left_';
import Newsletter from './Right_';
import { Container, Row, Col } from 'react-bootstrap';
import scss from './sass/index.scss';

const DownloadNewsletter_sccren = () => { 
    return(
        <>
            <div className="DownloadNewsletter_sccren">
                <div> 
                    <Download />
                </div>
    
                <div>
                    <Newsletter />
                </div>
            </div>
        </>
    )
}

export default DownloadNewsletter_sccren