import {GrAddCircle} from "react-icons/gr";
import { useEffect } from "react";
import "./style.css"
export default function Playlist({setCreatePlaylist , setPlaylistModal , playlist }){

  return(
    <>
    <div className ="playlistModal__container">
    <div className ="playlistModal">
      <div className ="playlistItems">
      <label>
        <input  type ="checkbox" value = "playlist 1"/>
        <span>Playlist 1</span>
      </label>
      
      </div>
      <button onClick ={()=>{
        setPlaylistModal(false)
        setCreatePlaylist(true)

      }} className ="playlistCreate__btn">
      <GrAddCircle/>
      New
      </button>
      
    </div>
    </div>
    </>
  )
}