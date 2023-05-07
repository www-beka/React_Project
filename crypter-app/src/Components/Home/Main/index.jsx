import Info_users from './Info_users'
import CardSectiom from './CardsSection'
import sass from './sass/index.scss'
const UserOfMonth = () => {
    return(
        <>
            <div className="main_UserOfMonth">
                <div>
                    <Info_users />
                </div>
                <div>
                    <CardSectiom />
                </div>
            </div>
            
        </>
    )
}

export default UserOfMonth