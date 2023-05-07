const Card = (props) => {
    return(
        <>
            <div className="card">
                <img src={props.img} alt="" />
                <p>{props.title}</p>
                <span>{props.subtitle}</span>
                <b>{props.balance}</b>
            </div>
        </>
    )
}

export default Card