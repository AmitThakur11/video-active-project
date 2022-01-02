import "./style.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useData } from "../../../Context/dataContext"
export default function VideoCard({ video, show, videoAction, playlist }) {
  const navigate = useNavigate()
  const { userDispatch, setLoading } = useData()
  return (
    <>
      <section className="videoCard">

        <img onClick={() => navigate(`/video/${video._id}`)} className="videoCard__img" src={video.thumbnail} alt="" />

        <div onClick={() => navigate(`/video/${video._id}`)} className="videoCard__detail">
          <div className="videoCard__title">{video.title}</div>
          <div className="videoCard__creator">
            <img src={video.creatorUrl} alt="/" />
            <div className="name">Kidshot</div>
          </div>
        </div>

        {show && <button className="remove" onClick={() => videoAction({ videoId: video._id, playlist: playlist, userDispatch: userDispatch, setLoading })}><RiDeleteBin6Line /></button>}
      </section>
    </>
  )
}