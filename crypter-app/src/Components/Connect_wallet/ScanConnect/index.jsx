import Connect_Wallet_left from "../WalletLeftRight/ConnetWallerLeft"
import QRcode from '../../../assets/images/QR_code.png'
import scss from '../sass/index.scss'
import { Link } from "react-router-dom"

const ScanConnect = () => {
    return(
        <>
           <div className="Connect_Wallet ScanConnect">
            <Connect_Wallet_left />
            <div className="Connect_Wallet_right">
                <div className="close">
                    <Link to='/Connect_Wallet'>
                        &#8592;
                    </Link>
                </div>
                <h1>Scan to connect</h1>
                <img src={QRcode} alt="" width={500}/>
            </div>
           </div>
        </>
    )
}

export default ScanConnect