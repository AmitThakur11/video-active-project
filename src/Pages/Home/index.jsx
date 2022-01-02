import HomeCard from "../../Components/Cards/HomeCard/HomeCard"
import "./style.css";
// import {
//   RiSearchLine
// } from "react-icons/ri";
import {Link} from "react-router-dom"
import {useData} from "../../Context/dataContext/index"
const Home =()=>{
  const {user : {videoList}} = useData()
    return(
      <>
      <section className ="home-container">
        
      <section className ="home">{
        videoList.map((video)=>{
          return <Link key={video._id} to={`/video/${video._id}`}><HomeCard video = {video}/></Link>
        })
        
        }
      </section>
      </section>
      </>
    )
  }
  
  export default Home