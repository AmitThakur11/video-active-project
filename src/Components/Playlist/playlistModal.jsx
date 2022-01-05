import { GrAddCircle, GrCheckboxSelected } from "react-icons/gr";
import "./style.css"

import { useData } from "../../Context/dataContext/index"
import { createPlayist,removeFromPlaylist } from "../../apiCalls";
export default function PlaylistModal({ setCreatePlaylist, setPlaylistModal, playlist }) {
  const { user: { playlists }, userDispatch, setLoading } = useData();
  const checkVideoInList = (list) => list.videos.find(({ _id }) => _id === playlist.video)
  const playlistSelect = (e,list)=>{
    e.target.checked ? createPlayist({ title: e.target.value, video: playlist.video }, userDispatch, setLoading) : removeFromPlaylist({ playlist: list._id, videoId: playlist.video, userDispatch: userDispatch, setLoading })
  }
  return (
    <>
      <div className="playlistModal__container">
        <div className="playlistModal">
          <div className="playlistItems">
            {!playlists.length ? <div className="emptyList">No Playlist</div> :
              playlists.map((list) => {
                return (
                  <label key={list._id}>
                    <input type="checkbox" value={list.title} checked={checkVideoInList(list) ? true : false} onChange={(e) =>playlistSelect(e,list) } />
                    <span>{list.title}</span>
                  </label>
                )
              })
            }

          </div>
          <div className="playlistModal__btn">
            <button onClick={() => {
              setPlaylistModal(false)
              setCreatePlaylist(true)

            }} className="playlistCreate__btn">
              <GrAddCircle />
              New
            </button>
            <button onClick={() => {
              setPlaylistModal(false)
            }} className="playlistDone__btn">
              <GrCheckboxSelected />
              Done</button>
          </div>

        </div>
      </div>
    </>
  )
}