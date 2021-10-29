import "./LikedVideos.css"
import VideoCard from "../../Components/Cards/videoCard/index"
import { userApiAction } from "../../apiCalls"
import {useData} from "../../context/dataContext/index"
const LikedVideos =()=>{
    const {user : {likedVideos}} = useData()
    return(
        <>
        <section>
            <div className ="likedVideo__title">Liked Videos</div>
            <div className ="likedVideo__items">
                {
                    likedVideos.map((video)=>{
                        return <VideoCard video = {video} show = {true}  videoAction = {userApiAction.addVideoInLike} />

                    })
                }


            </div>
        </section>
        </>
    )
}
export default LikedVideos