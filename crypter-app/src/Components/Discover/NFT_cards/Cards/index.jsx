const NFT_Cards = (props) => {
    return(
        <>
            <div className="cards">
                <img src={props.img} alt="" />
                <div className="cards-userName">
                    <img src={props.User} alt="" />
                    <span>{props.UserName}</span>
                    <img src={props.Colors} alt="" />
                </div>
                <div className="cards_price">
                    <div className="price_left">
                        <div className="circle"></div>
                        <span>{props.BidPrice}</span>
                        <p>{props.Bid}</p>
                    </div>
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


