import "./VideoFooter.css"
import { userApiAction } from "../../apiCalls";
import {
    RiSendPlaneLine,
    RiThumbUpLine,
    RiPlayList2Line,
    RiThumbUpFill
  } from "react-icons/ri";

  import { useData } from "../../context/dataContext/index"
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";


const VideoFooter =({videoId , setPlaylistModal, playlist , setPlaylist})=>{
  const {user : {videoList, likedVideos}  , userDispatch , setLoading} = useData();
  const {isLogin} = useAuth()
  const {addVideoInLike} = userApiAction
  const checkLike = likedVideos.find(({_id})=>_id === videoId);
  

  const video =  videoList.find((video)=>video._id === videoId);
    return(
        <section className="video-footer">
        <section className="title">{video?.title}</section>
        <section className="video-detail">
          <section className="video-views">
            <div>
              <span style={{ color: "red" }}>{video?.views.length}</span> Views
            </div>
          </section>
          <section className="video-action">
            <div>
              {checkLike ? <RiThumbUpFill className="icon" onClick = {()=>addVideoInLike({videoId : video._id , userDispatch : userDispatch , setLoading})} />:<RiThumbUpLine className="icon" onClick = {()=>addVideoInLike({videoId : video._id , userDispatch : userDispatch,setLoading})} />}
            </div>
            <div>
              <RiSendPlaneLine className="icon" />
            </div>
            <div>
              <RiPlayList2Line className="icon" onClick = {()=>{
                isLogin ?setPlaylistModal((modal => !modal)) : toast.error("First Login")
                setPlaylist((playlist)=>{
                  return {...playlist , video : video._id}
                })
                

              }
                }/>
            </div>
          </section>
        </section>
        <section className="author-card">
          <img
            src={video?.creatorUrl}
            alt="pic"
          />
          <div className="name">{video?.creator}</div>
        </section>

        <section className="description">
          <div className="head">Description</div>
          <div className="body">
            {video?.description}
          </div>
        </section>
      </section>

    )
}

export default VideoFooter