import "./style.css"
import {RiDeleteBin6Line} from "react-icons/ri"
export default function PlaylistCard({playlist}) {
  return (
    <div className="playlistBox">
      <div className="listName">{playlist.title}</div>
      <div className="videoCount">
        <span>{playlist.videos.length}</span> Videos
      </div>
      <button className ="remove" ><RiDeleteBin6Line/></button>
    </div>
  );
}
