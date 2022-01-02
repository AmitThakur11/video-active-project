import "./History.css"
import EmptyIndicator from "../../Components/EmptyIndicator"
import VideoCard from "../../Components/Cards/videoCard/index"
import {useData} from "../../context/dataContext/index"
import EmptyImg from "../../media/emptyImg.png"
import { userApiAction } from "../../apiCalls"
const HistoryVideos =()=>{
    const {user : {history} , userDispatch , setLoading} = useData()
    return(
        <>
        {history.length ?<section>
            <div className ="historyVideo__title">History : {history.length}</div>
            {history.length > 0 && <button className="clearHistoryBtn" onClick={()=>userApiAction.removeHistory(userDispatch,setLoading)}>Clear History</button>}
            <div className ="historyVideo__items">
                {
                    history.map((video)=>{
                        return <VideoCard video = {video} show = {true}  videoAction = {userApiAction.removeVideoFromHistory}/>

                    })
                }


            </div>
        </section>:<EmptyIndicator img ={EmptyImg} title ="Empty History" to="/"/>}
        </>
    )
}
export default HistoryVideos