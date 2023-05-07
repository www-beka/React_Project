import Card from "./Cards";
import User_1 from '../../../assets/images/User(1).png'
import User_2 from '../../../assets/images/User(2).png'
import User_3 from '../../../assets/images/User(3).png'
import User_4 from '../../../assets/images/User(4).png'
import User_5 from '../../../assets/images/User(5).png'
import User_6 from '../../../assets/images/User(6).png'
import User_7 from '../../../assets/images/User(7).png'
import User_8 from '../../../assets/images/User(8).png'
import scss from './Cards/style.scss'

const CardSection = (props) => {
    return(
        <>
            <div className="main_cards">
                <Card 
                    title="@randomdash"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="1"
                    img={User_1}
                />
                <Card 
                    title="@kohaku"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="2"
                    img={User_2}
                />
                <Card 
                    title="@gelo"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="3"
                    img={User_3}
                />
                <Card 
                    title="@elnafrederick"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="4"
                    img={User_4}
                />
                <Card 
                    title="@_kolahon"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="5"
                    img={User_5}
                />
                <Card 
                    title="@mcbess"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="6"
                    img={User_6}
                />
                <Card 
                    title="@aaronpenne"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="7"
                    img={User_7}
                />
                <Card 
                    title="@aaronpenne"
                    subtitle="Total sale"
                    balance="12.29 ETH"
                    ranking="8"
                    img={User_8}
                />
            </div>
            <div className="btn-more">
                <button>EXPLORE MORE</button>
            </div>
        </>
    )
}

export default CardSection