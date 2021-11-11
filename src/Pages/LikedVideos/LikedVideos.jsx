import "./LikedVideos.css"
import VideoCard from "../../Components/Cards/videoCard/index"
import { userApiAction } from "../../apiCalls"
import {useData} from "../../context/dataContext/index"
import EmptyIndicator from "../../Components/EmptyIndicator"
import EmptyImg from "../../media/emptyImg.png"
const LikedVideos =()=>{
    const {user : {likedVideos}} = useData()
    return(
        <>
        {likedVideos.length?<section>
            <div className ="likedVideo__title">Liked Videos : {likedVideos.length}</div>
            <div className ="likedVideo__items">
                {
                    likedVideos.map((video)=>{
                        return <VideoCard video = {video} show = {true}  videoAction = {userApiAction.addVideoInLike} />

                    })
                }


            </div>
        </section>:<EmptyIndicator img ={EmptyImg} title ="No videos" to ="/"/>}
        </>
    )
}
export default LikedVideos