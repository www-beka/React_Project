import Cards from './Cards'
import CardsImg_1 from '../../../assets/images/Cards/Cards_13.png';
import CardsImg_2 from '../../../assets/images/Cards/Cards_14.png';
import CardsImg_3 from '../../../assets/images/Cards/Cards_15.png';
import CardsImg_4 from '../../../assets/images/Cards/Cards_16.png';
import CardsImg_5 from '../../../assets/images/Cards/Cards_17.png';
import CardsImg_6 from '../../../assets/images/Cards/Cards_18.png';
import CardsImg_7 from '../../../assets/images/Cards/Cards_19.png';
import CardsImg_8 from '../../../assets/images/Cards/Cards_20.png';
import CardsImg_9 from '../../../assets/images/Cards/Cards_8.png';
import CardsImg_10 from '../../../assets/images/Cards/Cards_1.png';
import CardsImg_11 from '../../../assets/images/Cards/Cards_11.png';
import CardsImg_12 from '../../../assets/images/Cards/Cards_9.png';
import CardsImg_13 from '../../../assets/images/Cards/Cards_9.png';
import CardsImg_14 from '../../../assets/images/Cards/Cards_3.png';
import CardsImg_15 from '../../../assets/images/Cards/Cards_7.png';
import CardsImg_16 from '../../../assets/images/Cards/Cards_4.png';
import Avatar from '../../../assets/images/User(1).png';

const CardsSections = () => {
    return(
        <>
            <div className="PopularCollections_CardsSections">
                <Cards 
                    heroImg = {CardsImg_8}
                    otherImg_1 = {CardsImg_9}
                    otherImg_2 = {CardsImg_4}
                    otherImg_3 = '+4'
                    title = 'Cute Robot'
                    userAvatar = {Avatar}
                    userName = '@tranmautritam'
                    price = 'Floor price'
                    cash = '1.0 ETH'
                /> 
                <Cards 
                    heroImg = {CardsImg_5}
                    otherImg_1 = {CardsImg_6}
                    otherImg_2 = {CardsImg_7}
                    otherImg_3 = '+4'
                    title = 'Cute Robot'
                    userAvatar = {Avatar}
                    userName = '@tranmautritam'
                    price = 'Floor price'
                    cash = '1.0 ETH'
                /> 
                <Cards 
                    heroImg = {CardsImg_5}
                    otherImg_1 = {CardsImg_6}
                    otherImg_2 = {CardsImg_7}
                    otherImg_3 = '+4'
                    title = 'Cute Robot'
                    userAvatar = {Avatar}
                    userName = '@tranmautritam'
                    price = 'Floor price'
                    cash = '1.0 ETH'
                /> 
            </div>
        </>
    )
}

export default CardsSections