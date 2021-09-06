import "./Header.css";
import {
  RiSearchLine
} from "react-icons/ri";
import Logo from "./logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <div className="logo-name">
          <span>VIDEO</span>
          <br />
          ACTIVE
        </div>
      </div>
      <div className="search-bar">
        <input placeholder="search videos" />
        <RiSearchLine className="icon" />
      </div>
      <div className="header-menu">
        <button>Log in</button>
      </div>
    </header>
  );
};

export default Header;
