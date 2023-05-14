import scss from '../sass/index.scss';
import Right_img_1 from '../../../../assets/images/Auctionsending_Right_sccren_bg.png'
import Right_img_2 from '../../../../assets/images/Auctionsending_Right_sccren_sm.png'
const Auctionsending_Right = () => {
    return(
        <>
            <div className="Auctionsending_Right">
                <div>
                    <img src={Right_img_1} alt="" className='img_bg'/>
                </div>
                <div>
                    <img src={Right_img_2} alt=""  className='img_sm'/>
                </div>
            </div>
        </>
    )
}

export default Auctionsending_Right