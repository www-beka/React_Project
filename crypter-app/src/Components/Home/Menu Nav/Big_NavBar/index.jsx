import nav_sass from '../sass/nav.scss';
import left_img from '../../../../assets/images/left_nav.png'
const createWork = (props) => {
    return(
        <>
            <div className="nav-create-work">
                <div className="createWork-top">
                    <div className="createWork-top-left">
                        <h1>Curated Artwork</h1>
                        <button>&#x2799;</button>
                    </div>
                    <div className="createWork-top-right">
                        <span>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.</span>
                        <div>
                            <p>start your search</p> 
                            <div className="circle">.</div>
                        </div>
                    </div>
                    <div className="createWork-bottom">
                        <div className="creatework-bottom-left">
                            <img src={left_img} alt="none" />
                        </div>
                        <div className="creatework-bottom-right">
                            <div className="balance">
                                <div className="balance-items">
                                    <span>Collection</span>
                                    <div></div>
                                    <b>Escape II</b>
                                </div>
                                <div className="balance-items">
                                    <span>Buy now</span>
                                    <div></div>
                                    <b>10.00 ETH</b>
                                </div>
                                <div className="balance-items">
                                    <span>Reserve</span>
                                    <div></div>
                                    <b>2.38 ETH</b>
                                </div>    
                            </div>
                            <div className="creatework-bottom-right-bottom">
                                <h1>The creator network.</h1>
                                <button>View NFT &#x2799;</button>
                                <button>place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default createWork