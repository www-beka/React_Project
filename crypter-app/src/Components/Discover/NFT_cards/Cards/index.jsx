import scss from './sass/style.scss';

const NFT_Cards = (props) => {
    return(
        <>
            <div className="items">
                <div>
                    <img src={props.img} alt="" />
                </div>
                <div className="cards-userName">
                    <div>
                        <div>
                            <img src={props.User} alt="" />
                        </div>
                        <span>{props.UserName}</span>
                    </div>
                    <img src={props.Colors} alt="" />
                </div>
                <div className="cards_price">
                    <div className="price_left">
                        <div>
                            <div className="circle"></div>
                            <span>{props.BidPrice}</span>
                        </div>
                        <p>{props.Bid}</p>
                    </div>
                    <div className="price_center"></div>
                    <div className="price_right">
                        <span>{props.Price}</span>
                        <p>{props.Cash}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NFT_Cards


