import HotUsers_Month_Left from "./HotUser_left"
import HotUsers_Month_Right from "./HotUser_right"
import scss from './sass/index.scss'
const HotUsers_Month = () => {
    return(
        <>
            <div className="HotUsers_Month">
                <section>
                    <HotUsers_Month_Left />
                </section>
                <section>
                    <HotUsers_Month_Right />
                </section>
            </div>
        </>
    )
}

export default HotUsers_Month