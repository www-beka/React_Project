import next from '../../../assets/icons/Vector_next.svg'
const Info_users = () => {
    return(
        <>
            <div className="info_users">
                <div className="users_of_month">
                    <div>
                        <h1>Hot NFT artists of the month.</h1>
                        <div className="next_btn">
                            <img src={next} alt="" />
                        </div>
                    </div>
                    <div>
                        <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info_users