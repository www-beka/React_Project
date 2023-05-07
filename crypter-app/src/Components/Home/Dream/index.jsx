import sass from './sass/style.scss'
import Rihgt_img from '../../../assets/images/dreamSccren.png'
import esc_logo from '../../../assets/images/dream.png'
import user_1 from '../../../assets/images/User(1).png'
const DreamSccren = () => {
    return(
        <>
            <div className="dreamSccren">
                <div className="dreamSccren-top">
                    <div className="dreamSccren-left-top">
                        <div className="userAndEsc">
                            <div className="user">
                                <div>
                                    <img src={user_1} alt="" />
                                </div>
                                <span>@randomdash</span>
                            </div>
                            <div className="esc">
                                <img src={esc_logo} alt="" />
                                <span>Escape</span>
                            </div>
                        </div>
                        <h1>Beyond the Dream.</h1>
                    </div>
                    <div className="dreamSccren-left-bottom">
                        <div className="price">
                            <b>Buy now price</b>
                            <h1>8.00 ETH</h1>
                            <b>$24,635.39</b>
                        </div>
                        <button>MAKE OFFER</button>
                    </div>
                    </div>
                <div className="dreamSccren-right">
                    <img src={Rihgt_img} alt="" />
                </div>
            </div>
        </>
    )
}


export default DreamSccren