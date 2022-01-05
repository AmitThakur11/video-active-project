import "./style.css"
import VideoCard from "../../Components/Cards/videoCard/index"
import {useData} from "../../Context/dataContext/index"
import { useParams } from "react-router-dom"
import { userApiAction } from "../../apiCalls"
const PlaylistData =()=>{
    const {id} = useParams()
    const {user : {playlists} ,loading} = useData()
    console.log(playlists)
    const currentList = playlists.find(({_id})=>_id === id);
    return(
        <>
            {!loading  && <section>
            <div className ="playlist__title">{currentList.title}</div>
            <div className ="playlist__items">
                {
                    currentList.videos.map((video)=>{
                        return <VideoCard video = {video} show = {true} videoAction = {userApiAction.removeFromPlaylist} playlist = {currentList._id} />
                    })
                }


            </div>
        </section>}
        </>
    )
}
export default PlaylistData