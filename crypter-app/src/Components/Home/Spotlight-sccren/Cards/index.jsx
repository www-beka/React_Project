import scss from '../sass/index.scss';
const Spotlight_Cards = (props) => {
    return(
        <>
            <div className="card">
                <img src={props.img} alt="" />
                <div className='body-card'>
                    <div>
                        <p>{props.title}</p>
                        <span><b>{props.buy}</b>{props.price}</span>
                    </div>
                    <div>
                        <img src={props.avatar} alt="" width={96}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spotlight_Cards