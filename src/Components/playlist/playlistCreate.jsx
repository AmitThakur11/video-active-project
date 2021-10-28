import "./style.css"
import {userApiAction} from "../../apiCalls"
export default function CreatePlaylist({setCreatePlaylist , setPlaylist , playlist}){
    return <>
    <div className ="createPlaylist__container">
        <input onChange = {(e)=>setPlaylist((playlist)=>{
            console.log(playlist.title)
            return {...playlist,title : e.target.value}
        })}/>
        <div className ="createPlaylist__btn">
            <button className ="prm_btn" onClick = {()=>userApiAction.createPlayist(playlist)}>Create</button>
            <button className ="scn_btn" onClick={()=>setCreatePlaylist(false)}>Cancel</button>
        </div>

    </div>
    </>
}