import CardSection from "./CardsSections"
import scss from './sass/index.scss'
import UI from '../../../UI/style.scss'
const Spotlight_Sccren = () => {
    return(
        <>
            <div className="Spotlight_Sccren">
                <h1>Spotlight. </h1>
                <p>Projects you'll love</p>
                <CardSection/>
                <button className='explorer_more_btn'>
                    explorer more
                    <div>109</div>
                </button>
            </div>
        </>
    )
}

export default Spotlight_Sccren