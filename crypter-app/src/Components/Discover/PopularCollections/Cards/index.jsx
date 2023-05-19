const PopularCollection_Cards = (props) => {
    return(
        <>
            <div className="PopularCollection_Cards">
                <div className="cards_images">
                    <img src={props.heroImg} alt="" />
                    <div>
                        <img src={props.otherImg_1} alt="" />
                        <img src={props.otherImg_2} alt="" />
                        <div className="counter">
                            <span>{props.otherImg_3}</span>
                        </div>
                    </div>
                </div>
                <div className="cards_desk">
                    <div className="cards_left_desk">
                        <p>{props.title}</p>
                        <div className="user">
                            <img src={props.userAvatar} alt="" />
                        </div>
                        <b>{props.userName}</b>
                    </div>
                    <div className="cards_right_desk">
                        <span>{props.price}</span>
                        <b>{props.cash}</b>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCollection_Cards