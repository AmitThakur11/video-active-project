import HomeCard from "../../Components/Cards/HomeCard/HomeCard"
import "./Home.css";
import {Link} from "react-router-dom"
const Home =()=>{
    return(
      <section className ="home-container">
      <section className ="home">{
        Array(50).fill(0).map(()=>{
          return <Link to="/video"><HomeCard/></Link>
        })
        
        }
      </section>
      </section>
    )
  }
  
  export default Home