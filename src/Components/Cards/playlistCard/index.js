import "./style.css"
import {RiDeleteBin6Line} from "react-icons/ri"
import {Link} from "react-router-dom"

export default function PlaylistCard({playlist}) {
  return (
    <div className="playlistBox">
       <Link to = {`/playlist/${playlist._id}`}>
         <><div className="listName">{playlist.title}</div>
      <div className="videoCount">
        <span>{playlist.videos.length}</span> Videos
      </div>
      </>
      </Link>
      <button className ="remove" ><RiDeleteBin6Line/></button>
    </div>
  );
}
