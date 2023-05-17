import header from "./sass/header.scss";
import LeftNavBar from "./Left_and_right_Bars/LeftNavBar";
import RightNavBar from "./Left_and_right_Bars/RightNavBar";
import Big_NavBar from "../Big_NavBar";
import "../../../UI/style.scss";
import { Navbar, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <>

      <header style={header}>
        <Container>
        <div className="header">
          <div>
            <LeftNavBar />
          </div>
          <div>
            <RightNavBar />
          </div>
        </div>
        </Container>
      </header>
    </>
  );
};

export default NavBar;
