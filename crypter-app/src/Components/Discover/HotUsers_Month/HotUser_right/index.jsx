import User_1 from '../../../../assets/images/User(3).png';
import User_2 from '../../../../assets/images/User(1).png';
import User_3 from '../../../../assets/images/User(8).png';
import User_4 from '../../../../assets/images/User(4).png';
import User_5 from '../../../../assets/images/User(2).png';
import sass from '../sass/Right.scss'
import { Container } from 'react-bootstrap';

const HotUsers_Month_Right = () => {
    return(
        <>
            <div className="HotUsers_Month_Right">
                <Container>
                <div className="HotUsers">
                    <div className="users">
                        <div className="userAvatar">
                            <img src={User_1} alt="" />
                        </div>
                        <div className="userName">
                            <p>@randomdash</p>
                            <span>Total sale <b>12.29 ETH</b></span> 
                        </div>
                    </div>
                    <button>
                        Follow
                    </button>
                </div>
                <div className="HotUsers">
                    <div className="users">
                        <div className="userAvatar">
                            <img src={User_2} alt="" />
                        </div>
                        <div className="userName">
                            <p>@randomdash</p>
                            <span>Total sale <b>12.29 ETH</b></span> 
                        </div>
                    </div>
                    <button>
                        Follow
                    </button>
                </div>
                <div className="HotUsers">
                    <div className="users">
                        <div className="userAvatar">
                            <img src={User_3} alt="" />
                        </div>
                        <div className="userName">
                            <p>@randomdash</p>
                            <span>Total sale <b>12.29 ETH</b></span> 
                        </div>
                    </div>
                    <button>
                        Follow
                    </button>
                </div>
                <div className="HotUsers">
                    <div className="users">
                        <div className="userAvatar">
                            <img src={User_4} alt="" />
                        </div>
                        <div className="userName">
                            <p>@randomdash</p>
                            <span>Total sale <b>12.29 ETH</b></span> 
                        </div>
                    </div>
                    <button>
                        Follow
                    </button>
                </div>
                <div className="HotUsers">
                    <div className="users">
                        <div className="userAvatar">
                            <img src={User_5} alt="" />
                        </div>
                        <div className="userName">
                            <p>@randomdash</p>
                            <span>Total sale <b>12.29 ETH</b></span> 
                        </div>
                    </div>
                    <button>
                        Follow
                    </button>
                </div>
                </Container>
            </div>
        </>
    )
}

export default HotUsers_Month_Right