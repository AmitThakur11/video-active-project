import "./styles.css"
import Header from "./Components/Header/Header"
import Content from "./Pages/Content/Content"
import {useEffect} from "react"
import axios from "axios"
function App() {
  useEffect(()=>{
    (()=>{
      axios.defaults.baseURL = "http://localhost:5000/"
      axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
    })()

  },[])
  return (
    <div className="App">
      <Header/>
      <Content/>
     
    </div>
  );
}

export default App;
