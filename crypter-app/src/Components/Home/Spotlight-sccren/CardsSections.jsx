import Card from './Cards'
import Card_img_1 from '../../../assets/images/NFT_1.png'
import Card_img_2 from '../../../assets/images/NFT_2.png'
import Card_img_3 from '../../../assets/images/NFT_3.png'
import Card_img_4 from '../../../assets/images/NFT_4.png'
import Card_img_5 from '../../../assets/images/NFT_5.png'
import Card_img_6 from '../../../assets/images/NFT_6.png'
import Card_img_7 from '../../../assets/images/NFT_7.png'
import Card_img_8 from '../../../assets/images/NFT_8.png'
import Card_img_9 from '../../../assets/images/NFT_9.png'
import Card_img_10 from '../../../assets/images/NFT_10.png'
import Card_img_11 from '../../../assets/images/NFT_11.png'
import Card_img_12 from '../../../assets/images/NFT_12.png'
import Avatar_img from '../../../assets/images/avatars_stack.png'
import scss from './sass/index.scss'

const CardSection = () => {
    return(
        <>
            <div className="main-cards">
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_1}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_2}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_3}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_4}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_5}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_6}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_7}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_8}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_9}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_10}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_11}
                    avatar={Avatar_img}
                />
                <Card
                    title="The Currency"
                    price="12.29 ETH"
                    buy="Buy now"
                    img={Card_img_12}
                    avatar={Avatar_img}
                />
                </div>
        </>
    )
}

export default CardSection