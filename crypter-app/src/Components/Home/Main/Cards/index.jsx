const Card = (props) => {
    return(
        <>
            <div className="card">
                <div>
                    <img src={props.img} alt="" />
                </div>
                <p>{props.title}</p>
                <div>
                    <span>{props.subtitle}</span>
                    <b>{props.balance}</b>
                </div>
                <div className="ranking">
                    <b>{props.ranking}</b>
                </div>
            </div>
            
        </>
    )
}

export default Card