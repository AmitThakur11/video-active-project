import { GrAddCircle , GrCheckboxSelected } from "react-icons/gr";
import "./style.css"

import { useData } from "../../context/dataContext/index"
import { userApiAction } from "../../apiCalls";
export default function PlaylistModal({ setCreatePlaylist, setPlaylistModal, playlist }) {
  const { user : {playlists} , userDispatch} = useData();
  const checkVideoInList =(list)=> list.videos.find(({_id})=>_id === playlist.video)
  
  return (
    <>
      <div className="playlistModal__container">
        <div className="playlistModal">
          <div className="playlistItems">
            {
              playlists.map((list) => {
                return (
                  <label>
                    <input  type="checkbox" value={list.title} checked = {checkVideoInList(list)?true:false} onChange= {(e)=>{
                      e.target.checked? userApiAction.createPlayist({title : e.target.value , video : playlist.video}, userDispatch): userApiAction.removeFromPlaylist({playlist : list._id, videoId : playlist.video ,userDispatch : userDispatch})
                      console.log(e.target.checked)} }/>
                    <span>{list.title}</span>
                  </label>
                )
              })
            }

          </div>
          <div className ="playlistModal__btn">
          <button onClick={() => {
            setPlaylistModal(false)
            setCreatePlaylist(true)

          }} className="playlistCreate__btn">
            <GrAddCircle />
            New
          </button>
          <button  onClick ={()=>{
            setPlaylistModal(false)
          }} className="playlistDone__btn">
            <GrCheckboxSelected/>
            Done</button>
          </div>

        </div>
      </div>
    </>
  )
}