import MetaMaskWallet from '../../assets/icons/MetaMaskWallet.svg'
import CoinbaseWallet from '../../assets/icons/CoinbaseWallet.svg'
import MyEtherWallet from '../../assets/icons/MyEtherWallet.svg'
import WalletConnect from '../../assets/icons/WalletConnect.svg'
import Placeholder from '../../assets/icons/placeholder.svg'
import Logo from '../../assets/logo.svg'
import NextLogo from '../../assets/icons/Vector_next.svg'
import scss from './sass/index.scss'
import { useState } from 'react'

const Connect_Wallet = () => {
    let [registered, setRegistered] = useState(true);
    let registerBB = { "border-bottom": "1px solid #fff" }
    let loginBB = { "border-bottom": "1px solid #999" }
    let borderNone = { "border-bottom": "none"}

    return(
        <>
            <div className="Connect_Wallet" style={scss}>
                <div className="Connect_Wallet_left">
                    <div className="Connect_Wallet_left_top">
                        <span><img src={Logo} alt="logo" /> crypter </span>   
                    </div>
                    <div className="Connect_Wallet_left_bottom">
                        <div>
                            <h1>Connect wallet.</h1>
                            <button><img src={NextLogo} alt="" /> </button>
                        </div>
                        <p>Choose how you want to connect. There areseveral wallet providers.</p>
                    </div>

                </div>
                <div className="Connect_Wallet_right">
                    <div className="close">&#x2715;</div>
                    <h1>Choose the wallet</h1>
                    <div className="NavTabs">
                        <span onClick={() => { setRegistered(true) }} style={registered ? registerBB : null}>Ethereum</span>
                        <span onClick={() => { setRegistered(false) }} style={registered ? borderNone : registerBB}>Flow</span>
                        <span onClick={() => { setRegistered(false) }} style={registered ? borderNone : registerBB ? borderNone : null}>Solana</span>
                        <span onClick={() => { setRegistered(false) }} style={registered ? null : null}>Polygon</span>
                    </div>
                    <div className="wallets">
                        <div className="wallet_items">
                            <span> <img src={MetaMaskWallet} alt="walletLogo" /> MetaMask</span>
                        </div>
                        <div className="wallet_items">
                            <span> <img src={WalletConnect} alt="walletLogo" /> WalletConnect</span>
                        </div>
                        <div className="wallet_items">
                            <span> <img src={CoinbaseWallet} alt="walletLogo" /> Coinbase Wallet</span>
                        </div>
                        <div className="wallet_items">
                            <span> <img src={MyEtherWallet} alt="walletLogo" /> MyEtherWallet</span>
                        </div>
                    </div>
                    <div className="scan_connect">
                        <span> <img src={Placeholder} alt="" /> Scan to connect</span>
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