import {
    RiAliensFill,
    RiBuilding2Fill,
    RiThumbUpFill,
    RiPlayList2Fill,
    RiChatHistoryFill
  } from "react-icons/ri";

  import "./SideBar.css";

  import {Link} from "react-router-dom"
  const SideBar = () => {
    return (
      <div className="side-bar">
        <section className="side-bar-block">
        <Link to ="/">
          <div className="sb-option">
          
            <RiBuilding2Fill />
            <span>Home</span>
            
          </div>
          </Link>
          <Link to="/likedvideos">
          <div className="sb-option">
            <RiThumbUpFill />
            <span>Liked Videos</span>
          </div>
          </Link>
          <Link to= "/profile">
          <div className="sb-option">
            <RiAliensFill />
            <span>Profile</span>
          </div>
          </Link>
          <Link to ="/history">
          <div className="sb-option">
            <RiChatHistoryFill />
            <span>History</span>
          </div>
          </Link>
          <Link to="/playlist">
          <div className="sb-option">
            <RiPlayList2Fill />
            <span>Playlist</span>
          </div>
          </Link>
        </section>
      </div>
    );
  };
  
  export default SideBar;
  