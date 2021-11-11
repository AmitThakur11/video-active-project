import "./style.css"
import {userApiAction} from "../../apiCalls"
import {useData} from "../../context/dataContext/index"
export default function CreatePlaylist({setCreatePlaylist , setPlaylist , playlist}){
    const {userDispatch , setLoading} =useData()
    return <>
    <div className ="createPlaylist__container">
        <input onChange = {(e)=>setPlaylist((playlist)=>{
            console.log(playlist.title)
            return {...playlist,title : e.target.value}
        })}/>
        <div className ="createPlaylist__btn">
            <button className ="prm_btn" onClick = {()=>{
                userApiAction.createPlayist(playlist , userDispatch,setLoading)
                setCreatePlaylist(false)
                }}>Create</button>
            <button className ="scn_btn" onClick={()=>{
                setCreatePlaylist(false)
                }}>Cancel</button>
        </div>

    </div>
    </>
}