import HomeCard from "../../Components/Cards/HomeCard/HomeCard"
import "./Home.css"
const Home =()=>{
    return(
      <section className ="home-container">
      <section className ="home">{
        Array(50).fill(0).map(()=>{
          return <HomeCard/>
        })
        
        }
      </section>
      </section>
    )
  }
  
  export default Home