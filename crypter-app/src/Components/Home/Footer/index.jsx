import Logo from '../../../assets/logo.svg';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import twitter from '../../../assets/icons/twitter.svg';
import mirror from '../../../assets/icons/mirror.svg';
import scss from './sass/index.scss'
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
        <footer>
            <Container>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <h1><img src={Logo} alt="" /> crypter</h1>
                        <p>Empower your creativity.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer_links">
                            <div className="links_title">
                                <span>CRYPTER.</span>
                            </div>
                            <div className="all_links">
                            {/* Now I use span but in the future I need to change to React => links  👇🏻*/}
                                <span>Explorer</span>
                                <span>Connect wallet</span>
                                <span>Upload</span>
                                <span>How it work</span>
                            </div>    
                        </div>
                        <div className="footer_links">
                            <div className="links_title">
                                <span>INFO</span>
                            </div>
                            <div className="all_links">
                            {/* Now I use span but in the future I need to change to React => links  👇🏻*/}
                                <span>Download</span>
                                <span>Help center</span>
                                <span>Blog</span>
                                <span>Jobs</span>
                            </div>
                        </div>
                        <div className="footer_links">
                            <div className="links_title">
                                <span>SOCIAL</span>
                            </div>
                            <div className="all_links">
                            {/* Now I use span but in the future I need to change to React => links  👇🏻*/}
                                <span> <img src={instagram} alt="" /> Instagram</span>
                                <span> <img src={twitter} alt="" /> Twitter</span>
                                <span> <img src={facebook} alt="" /> Facebook</span>
                                <span> <img src={mirror} alt="" /> Mirror</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
                <div className="footer-bottom">
                        <Container>
                    <div className="footer-bottom-container">

                        <div className="footer-bottom-left">
                            <p>Copyright © 2022 UI8 LLC. All rights reserved</p>
                        </div>
                        <div className="footer-bottom-right">
                            <span>We use cookies for better service.</span>
                            <button>ACCEPT</button>
                        </div>
                    </div>
                        </Container>
                </div>
        </footer>
    </>
  )
}
