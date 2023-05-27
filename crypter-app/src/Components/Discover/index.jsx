import BestNFT from "./BestNFT"
import NFT_cards from "./NFT_cards"
import PopularCollection from "./PopularCollections"
import HotUsers_Month from "./HotUsers_Month"
import Download from '../Home/Download'
import NavBar from "../Home/Menu Nav"
import Footer from "../Home/Footer"

export default function Discover_Sccren() {
    return(
        <>
            <section>
                <NavBar />
            </section>
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
            <section>
                <Download />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}