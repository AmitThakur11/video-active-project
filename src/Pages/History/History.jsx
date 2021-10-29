import "./History.css"

import VideoCard from "../../Components/Cards/videoCard/index"
import {useData} from "../../context/dataContext/index"
import { userApiAction } from "../../apiCalls"
const HistoryVideos =()=>{
    const {user : {history} , userDispatch} = useData()
    return(
        <>
        <section>
            <div className ="likedVideo__title">History</div>
            {history.length > 0 && <button onClick={()=>userApiAction.removeHistory(userDispatch)}>Clear History</button>}
            <div className ="likedVideo__items">
                {
                    history.map((video)=>{
                        return <VideoCard video = {video} show = {true}  videoAction = {userApiAction.removeVideoFromHistory}/>

                    })
                }


            </div>
        </section>
        </>
    )
}
export default HistoryVideos