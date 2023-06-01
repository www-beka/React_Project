import scss from './sass/index.scss'
import ConnetWalletLeft from './WalletLeftRight/ConnetWallerLeft'
import ConnetWalletRight from './WalletLeftRight/ConnetWallerRight'

const Connect_Wallet = () => {
    return(
        <>
            <div className="Connect_Wallet" style={scss}>
                <ConnetWalletLeft />
                <ConnetWalletRight />
            </div>
        </>
    )
}

export default Connect_Wallet