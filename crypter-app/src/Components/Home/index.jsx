import NavBar from "./Menu Nav"
import Main from "./Main"
import DreamSccren from "./Dream"
import Auctionsending from "./Auctionsending-sccren"
import Spotlight_Sccren from "./Spotlight-sccren"
import YourCreative from "./YourCreative"
import BigNavbar from './Big_NavBar'
import Download from './Download'
import Footer from './Footer'
import scss from './Mobile/index.scss'


const HomePage = () => {
    return(
        <>
            <div className="homePage">
                <section>
                    <NavBar />
                </section>
                <section>
                    <BigNavbar />
                </section>
                <section>
                    <Main />
                </section>
                <section>
                    <DreamSccren />
                </section>
                <section>
                    <Auctionsending />
                </section>
                <section>
                    <Spotlight_Sccren />
                </section>
                <section>
                    <YourCreative />
                </section>
                <section>
                    <Download />
                </section>
                <section>
                    <Footer />
                </section>
            </div>           
        </>
    )
}

export default HomePage