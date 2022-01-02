import "./style.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { userApiAction } from "../../../apiCalls";
import { useData } from "../../../Context/dataContext";

export default function PlaylistCard({ playlist }) {
  const { userDispatch, setLoading } = useData();
  return (
    <div className="playlistBox">
      <Link to={`/playlist/${playlist._id}`}>
        <>
          <div className="listName">{playlist.title}</div>
          <div className="videoCount">
            <span>{playlist.videos.length}</span> Videos
          </div>
        </>
      </Link>
      <button
        className="remove"
        onClick={() =>
          userApiAction.removePlaylist(playlist._id, userDispatch, setLoading)
        }
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
