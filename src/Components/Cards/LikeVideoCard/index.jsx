import "./style.css"
import {RiDeleteBin6Line} from "react-icons/ri"
import {useNavigate} from "react-router-dom"
export default function LikedCard({video , show}){
    const navigate = useNavigate()
  return(
    <>
    <section className ="likeCard">
    
      <img  onClick ={()=>navigate(`/video/${video._id}`)} className ="likeCard__img" src={video.thumbnail} alt =""/>
    
      <div  onClick ={()=>navigate(`/video/${video._id}`)} className ="likeCard__detail">
        <div className = "likeCard__title">{video.title}</div>
        <div className ="likeCard__creator">
          <img src ={video.creatorUrl} alt ="/"/>
          <div className ="name">Kidshot</div>
        </div>
      </div>
     
      {show && <button className ="remove"><RiDeleteBin6Line/></button>}
    </section>
    </>
  )
}