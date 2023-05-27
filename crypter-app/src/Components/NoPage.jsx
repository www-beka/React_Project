import { Link } from "react-router-dom";
import No_Page from '../assets/images/no_page.jpg';

const NoPage = () => {

    return(
        <>
            <div className="no-page">
                <p>Page not found</p>
                <h1>404</h1>
                <p>We couldn't page you're looking for</p>
                <button>
                    <Link to='/'>
                        Back
                    </Link>
                </button>
            </div>
        </>
    ) 
};

export default NoPage;
