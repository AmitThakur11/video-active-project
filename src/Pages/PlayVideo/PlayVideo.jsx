import "./PlayVideo.css"
import { useState } from "react";
import VideoFooter from "../../Components/VideoFooter/VideoFooter"
import PlaylistModal from "../../Components/playlist/playlistModal"
import Createplaylist from "../../Components/playlist/playlistCreate"
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useData } from "../../context/dataContext/index"
import LikedCard from "../../Components/Cards/LikeVideoCard/index"


const PlayVideo = () => {
    const { id } = useParams()
    const { user: { videoList } } = useData()
    console.log("user : ")
    console.log(videoList)
    const [playlistModal, setPlaylistModal] = useState(false)
    const [createplaylist, setCreatePlaylist] = useState(false)
    const [playlist, setPlaylist] = useState({
        title: "",
        video: ""

    })


    return (
        <section className="play-video-container">
            {
                videoList.map((video)=>{
                    return <> {
                        video._id === id && <div className="video-container">
                        {
                            <div key={video._id} className="video">
                                <ReactPlayer url={video.url} width="100%" height="100%" playing light={false} controls />
                            </div>
                        }
                        <VideoFooter videoId={id} setPlaylistModal={setPlaylistModal} playlist={playlist} setPlaylist={setPlaylist} />
        
                    </div>
                    }</>
                }
                )
            }
            <div className="recommendedVideo">{
                videoList.map((video) => {
                    return <LikedCard video={video} show={false} />
                })
            }</div>

            {playlistModal && <PlaylistModal setPlaylistModal={setPlaylistModal} setCreatePlaylist={setCreatePlaylist} setPlaylist={setPlaylist} />}
            {(createplaylist && !playlistModal) && <Createplaylist setCreatePlaylist={setCreatePlaylist} setPlaylist={setPlaylist} playlist={playlist} />}


        </section>
    )
}

export default PlayVideo