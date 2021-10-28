import HomeCard from "../../Components/Cards/HomeCard/HomeCard"
import "./Home.css";
// import {
//   RiSearchLine
// } from "react-icons/ri";
import {Link} from "react-router-dom"
import {useData} from "../../context/dataContext/index"
const Home =()=>{
  const {user : {videoList}} = useData()
    return(
      <>
      {/* <div className="search-bar">
        <input placeholder="search videos" />
        <RiSearchLine className="icon" />
      </div> */}
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