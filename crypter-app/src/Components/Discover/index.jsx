import BestNFT from "./BestNFT"
import NFT_cards from "./NFT_cards"
import PopularCollection from "./PopularCollections"
import HotUsers_Month from "./HotUsers_Month"
import Download from '../Home/Download'
import Footer from '../Home/Footer'
import NavBar from '../Home/Menu Nav'
export default function Discover_Sccren() {
    return(
        <>
            <section>
                <BestNFT />
            </section>
            <section>
                <NFT_cards />
            </section>
            <section>
                <PopularCollection />
            </section>
            <section>
                <HotUsers_Month />
            </section>
        </>
    )
}