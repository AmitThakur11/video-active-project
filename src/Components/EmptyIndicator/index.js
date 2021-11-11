
import "./style.css"
import {Link} from "react-router-dom"
export default function EmptyIndicator({img,title,to}){
  return(
    <div className ="emptyPage__container">
      <div className ="emptyPage__info">
      <div className="emptyPage__title">{title}</div>
      {to && <Link to ={to}><button className ="button" >Explore</button></Link>}
      </div>
      <div className ="emptyPage__img">
      <img src = {img} alt ="/"/>
      </div>
      
    </div>
  )
}