import "./style.css"
import LoaderImg from "../../media/logo.png"
export default function Loader(){
    return(
        <div className ="loaderContainer">
            <img src ={LoaderImg} alt ="loader" />
        </div>
    )
}