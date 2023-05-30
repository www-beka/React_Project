import MetaMaskWallet from '../../assets/icons/MetaMaskWallet.svg'
import CoinbaseWallet from '../../assets/icons/CoinbaseWallet.svg'
import MyEtherWallet from '../../assets/icons/MyEtherWallet.svg'
import WalletConnect from '../../assets/icons/WalletConnect.svg'
import Placeholder from '../../assets/icons/placeholder.svg'

import NextLogo from '../../assets/icons/next.svg'
import scss from './sass/index.scss'
import { Link } from 'react-router-dom'
import ConnetWalletLeft from './ConnetWallerLeft'

const Connect_Wallet = () => {
    return(
        <>
            <div className="Connect_Wallet" style={scss}>
                
                <ConnetWalletLeft />
                
                <div className="Connect_Wallet_right">
                    <div className="close">
                        <Link to='/'>
                            &#x2715;
                        </Link>
                    </div>
                    <h1>Choose the wallet</h1>
                    <div className="NavTabs">
                        <span>Ethereum</span>
                        <span>Flow</span>
                        <span>Polygon</span>
                        <span>Solana</span>
                    </div>
                    <div className="wallets">
                        <div className="wallet_items">
                            <span> <img src={MetaMaskWallet} alt="walletLogo" /> MetaMask</span>
                            <img src={NextLogo} alt="" width={0}/>
                        </div>
                        <div className="wallet_items">
                            <span> <img src={WalletConnect} alt="walletLogo" /> WalletConnect</span>
                            <img src={NextLogo} alt="" width={0}/>
                        </div>
                        <div className="wallet_items">
                            <span> <img src={CoinbaseWallet} alt="walletLogo" /> Coinbase Wallet</span>
                            <img src={NextLogo} alt="" width={0}/>
                        </div>
                        <div className="wallet_items">
                            <span> <img src={MyEtherWallet} alt="walletLogo" /> MyEtherWallet</span>
                            <img src={NextLogo} alt="" width={0}/>
                        </div>
                    </div>
                    <div className="scan_connect">
                        <span> 
                            <img src={Placeholder} alt="" /> 
                            <Link to='/ScanConnect'>
                                Scan to connect
                            </Link>
                        </span>
                    </div>
                    <div className="cookies">
                        <p>We use 🍪 <b>cookies</b> for better experience</p>
                        <button>Accept</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect_Wallet