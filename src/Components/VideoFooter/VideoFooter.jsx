import "./VideoFooter.css"
import { userApiAction } from "../../apiCalls";
import {
    RiSendPlaneLine,
    RiThumbUpLine,
    RiPlayList2Line,
  } from "react-icons/ri";

  import { useData } from "../../context/dataContext/index"


const VideoFooter =({videoId , setPlaylistModal, playlist , setPlaylist})=>{
  const {user : {videoList}  , userDispatch} = useData();
  const {addVideoInLike} = userApiAction

  const video =  videoList.find((video)=>video._id === videoId);
    return(
        <section className="video-footer">
        <section className="title">{video?.title}</section>
        <section className="video-detail">
          <section className="video-views">
            <div>
              <span style={{ color: "red" }}>{video?.views}</span> Views
            </div>
          </section>
          <section className="video-action">
            <div>
              <RiThumbUpLine className="icon" onClick = {()=>addVideoInLike({videoId : video._id , userDispatch : userDispatch})} />
            </div>
            <div>
              <RiSendPlaneLine className="icon" />
            </div>
            <div>
              <RiPlayList2Line className="icon" onClick = {()=>{
                setPlaylistModal((modal => !modal))
                setPlaylist((playlist)=>{
                  return {...playlist , video : video._id}
                })
                console.log(playlist)

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