import "./LikedVideos.css"
import LikedCard from "../../Components/Cards/LikeVideoCard/index"
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
                        return <LikedCard video = {video} show = {true} />

                    })
                }


            </div>
        </section>
        </>
    )
}
export default LikedVideos