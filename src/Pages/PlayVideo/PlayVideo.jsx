import "./PlayVideo.css"
// import Comment from "../../Components/Comment/Comment"
import VideoFooter from "../../Components/VideoFooter/VideoFooter"
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useData } from "../../context/dataContext/index"


const PlayVideo = () => {
    const { id } = useParams()
    const { videoList } = useData()
    return (
        <section className="play-video-container">
            <div className="video-container">
                {
                    videoList.map((video) => {
                        return <>
                        { video._id === id && <div key = {id} className="video">
                            <ReactPlayer url={video.url} width = "100%" height="100%"  playing  light={false} controls />
                            </div>}
                            </>


                        
                    })
                }

                <VideoFooter  videoId = {id}/>
            </div>
          

        </section>
    )
}

export default PlayVideo