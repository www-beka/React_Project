import Logo from '../../../assets/logo.svg'
import Next from '../../../assets/icons/Vector_next.svg'
import scss from '../sass/index.scss'; 

const Connect_Wallet_left = () => {
    return(
        <>
            <div className="Connect_Wallet_left" style={scss}>
                    <div className="Connect_Wallet_left_top">
                        <span><img src={Logo} alt="logo" /> crypter </span>   
                    </div>
                    <div className="Connect_Wallet_left_bottom">
                        <div>           
                            <h1>Connect wallet.</h1>
                            <button><img src={Next} alt="" /> </button>
                        </div>
                        <p>Choose how you want to connect. There areseveral wallet providers.</p>
                    </div>
                </div>
        </>
    )
}

export default Connect_Wallet_left