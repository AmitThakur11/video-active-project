import "./VideoFooter.css"

import {
    RiSendPlaneLine,
    RiThumbUpLine,
    RiThumbDownLine,
    RiPlayList2Line,
  } from "react-icons/ri";

  import { useData } from "../../context/dataContext/index"


const VideoFooter =({videoId})=>{
  const {videoList} = useData();

  const video =  videoList.find((video)=>video._id === videoId);
  console.log(video)
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
              <RiThumbUpLine className="icon" />
            </div>
            <div>
              <RiThumbDownLine className="icon" />
            </div>
            <div>
              <RiSendPlaneLine className="icon" />
            </div>
            <div>
              <RiPlayList2Line className="icon" />
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