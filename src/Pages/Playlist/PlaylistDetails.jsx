import "./Playlist.css"
import VideoCard from "../../Components/Cards/videoCard/index"
import {useData} from "../../context/dataContext/index"
import { useParams } from "react-router-dom"
const LikedVideos =()=>{
    const {id} = useParams()
    const {user : {playlists}} = useData()
    const currentList = playlists.find(({_id})=>_id === id);
    console.log(id)
    return(
        <>
        <section>
            <div className ="playlist__title">{currentList.title}</div>
            <div className ="playlist__items">
                {
                    currentList.videos.map((video)=>{
                        return <VideoCard video = {video} show = {true} />
                    })
                }


            </div>
        </section>
        </>
    )
}
export default LikedVideos