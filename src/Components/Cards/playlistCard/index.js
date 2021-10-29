import "./style.css"
import {RiDeleteBin6Line} from "react-icons/ri"
import {Link} from "react-router-dom"
import { userApiAction } from "../../../apiCalls";
import { useData } from "../../../context/dataContext";

export default function PlaylistCard({playlist}) {
  const {userDispatch} = useData()
  return (
    <div className="playlistBox">
       <Link to = {`/playlist/${playlist._id}`}>
         <><div className="listName">{playlist.title}</div>
      <div className="videoCount">
        <span>{playlist.videos.length}</span> Videos
      </div>
      </>
      </Link> 
      <button className ="remove" onClick ={()=>userApiAction.removePlaylist(playlist._id,userDispatch)} ><RiDeleteBin6Line/></button>
    </div>
  );
}
