import Next from '../../../../assets/icons/Vector_next.svg'

const HotUsers_Month_Left = () => {
    return(
        <>  
            <div className="HotUsers_Month_Left">
                <div className="left-top">
                    <h1>Hot NFT artists of the month.</h1>
                    <img src={Next} alt="" />
                </div>
                <div className="left-bottom">
                    <p>
                        We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. 
                        Join the millions of creators, collectors, and curators who are on this journey with you.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HotUsers_Month_Left