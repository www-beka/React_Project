import Card from './Cards'
import UserAvatar from '../../../assets/images/User(4).png'
import ColorImg from '../../../assets/icons/Colors.svg' 
import CardImg from '../../../assets/images/Cards.png'

const Discover_Card_Sections = () => {
    return(
        <>
            <div className="Discover_Card_Sections">
                <Card 
                    img = {CardImg}
                    User = {UserAvatar}
                    UserName = '@elnafrederick'
                    Colors = {ColorImg}
                    BidPrice = 'Current bid'
                    Bid = '0.4321 ETH'
                    Price = 'Buy now'
                    Cash = '2.00 ETH'
                />
            </div>
        </>
    )
}

export default Discover_Card_Sections