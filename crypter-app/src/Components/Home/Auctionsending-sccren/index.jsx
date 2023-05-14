import scss from './sass/index.scss';
import Left from './Left-componrnts'
import Right from './Right-components'

const UserCollections = () => {
    return(
        <>
          <div className="Auctionsending-sccren">
              <div>
                <Left />
              </div>
              <div>
                <Right />
              </div>
          </div>
        </>
    )
}


export default UserCollections