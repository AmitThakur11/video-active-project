import {
    RiAliensFill,
    RiBuilding2Fill,
    RiThumbUpFill,
    RiPlayList2Fill,
    RiChatHistoryFill
  } from "react-icons/ri";
  import "./SideBar.css";
  const SideBar = () => {
    return (
      <div className="side-bar">
        <section className="side-bar-block">
          <div className="sb-option">
            <RiBuilding2Fill />
            <span>Home</span>
          </div>
          <div className="sb-option">
            <RiThumbUpFill />
            <span>Liked Videos</span>
          </div>
          <div className="sb-option">
            <RiAliensFill />
            <span>Profile</span>
          </div>
          <div className="sb-option">
            <RiChatHistoryFill />
            <span>History</span>
          </div>
          <div className="sb-option">
            <RiPlayList2Fill />
            <span>Playlist</span>
          </div>
        </section>
      </div>
    );
  };
  
  export default SideBar;
  