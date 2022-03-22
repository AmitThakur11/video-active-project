import "./Header.css";
import {useState} from "react"
import Logo from "../../Media/logo.png";
import {Link} from "react-router-dom"

import { useAuth } from "../../Context/authContext";
import {useData} from "../../Context/dataContext"
const Header = () => {
  const {isLogin} = useAuth();
  const {user} = useData();
  const [search ,setSearch] = useState("");
  const filteredData = user.videoList.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))
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
      
      <div className ="searchBar__section">
        <input value ={search} className ="searchInput" placeholder ="Search" onChange = { (e)=>setSearch(e.target.value)} />
        {search !=="" && <div className ="searchResult" onClick = {()=>setSearch("")}>
          {
            filteredData.length !== 0 ? filteredData.map(({title,_id})=>{
              return <div key ={_id} className ="searchResult__item" >
                <Link to={`/video/${_id}`}>{title}</Link>
                </div>
              
            }): <div className="searchResult__item">no result</div>
          }

        </div>}
      </div>
      <div className="header-menu">
      
      <Link to="/login" ><div className ="login-btn">{ isLogin? "Log out" :"Log in"}</div></Link>
      </div>
    </header>
  );
};

export default Header;
