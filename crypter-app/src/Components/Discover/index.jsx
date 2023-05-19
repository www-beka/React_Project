import BestNFT from "./BestNFT"
import NFT_cards from "./NFT_cards"
import PopularCollection from "./PopularCollections"
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
        </>
    )
}