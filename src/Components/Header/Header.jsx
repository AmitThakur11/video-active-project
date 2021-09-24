import "./Header.css";

import Logo from "../../media/logo.png";
import {Link} from "react-router-dom"

const Header = () => {
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
        <div className ="login-btn"><Link to="/login" >Log in</Link></div>
        
      </div>
    </header>
  );
};

export default Header;
