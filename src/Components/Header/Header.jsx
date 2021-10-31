import "./Header.css";

import Logo from "../../media/logo.png";
import {Link} from "react-router-dom"

import { useAuth } from "../../context/authContext";


const Header = () => {
  const {isLogin} = useAuth()
  return (
    <header>
      <Link to="/">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <div className="logo-name">
          <span>VIDEO</span>
          <br />
          ACTIVE
        </div>
      </div>
      </Link>
      
      <div className="header-menu">
      <Link to="/login" ><div className ="login-btn">{ isLogin? "Log out" :"Log in"}</div></Link>
      </div>
    </header>
  );
};

export default Header;
