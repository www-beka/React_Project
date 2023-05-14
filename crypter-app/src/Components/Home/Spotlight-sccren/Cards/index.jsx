const Spotlight_Cards = (props) => {
    return(
        <>
            <div className="card">
                <img src={props.img} alt="" />
                <div>
                    <div>
                        <p>{props.title}</p>
                        <span><b>{props.buy}</b>{props.price}</span>
                    </div>
                    <div>
                        <img src={props.avatar} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spotlight_Cards