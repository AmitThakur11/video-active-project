import "./style.css"
import { useState  , useEffect} from "react";
import VideoFooter from "../../Components/VideoFooter/VideoFooter"
import PlaylistModal from "../../Components/Playlist/playlistModal"
import Createplaylist from "../../Components/Playlist/playlistCreate"
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useData } from "../../Context/dataContext/index"
import LikedCard from "../../Components/Cards/videoCard/index"
import { userApiAction } from "../../apiCalls";
import { useAuth } from "../../Context/authContext";


const PlayVideo = () => {
    const { id } = useParams()
    const { user: { videoList } , userDispatch} = useData()
    console.log("user : ")
    const {isLogin} = useAuth()
    console.log(videoList)
    const [playlistModal, setPlaylistModal] = useState(false)
    const [createplaylist, setCreatePlaylist] = useState(false)
    const [playlist, setPlaylist] = useState({
        title: "",
        video: ""

    })

    useEffect(()=>{
        isLogin && userApiAction.addVideoToHistory(id, userDispatch)

    },[id, userDispatch,isLogin])



    return (
        <section className="play-video-container">
            {
                videoList.map((video)=>{
                    return <> {
                        video._id === id && <div className="video-container">
                        {
                            <div key={video._id} className="video">
                                <ReactPlayer url={video.url} width="100%" height="100%" playing light={false} controls  />
                            </div>
                        }
                        <VideoFooter  videoId={id} setPlaylistModal={setPlaylistModal} playlist={playlist} setPlaylist={setPlaylist} />
        
                    </div>
                    }</>
                }
                )
            }
            <div className="recommendedVideo">
            {

                videoList.map((video) => {
                    return <>{id !== video._id && <LikedCard video={video} show={false} />}</>
                })
            }</div>

            {playlistModal && <PlaylistModal setPlaylistModal={setPlaylistModal} setCreatePlaylist={setCreatePlaylist} playlist={playlist} />}
            {(createplaylist && !playlistModal) && <Createplaylist setCreatePlaylist={setCreatePlaylist} setPlaylist={setPlaylist} playlist={playlist} />}


        </section>
    )
}

export default PlayVideo