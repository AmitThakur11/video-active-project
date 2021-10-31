import "./styles.css"
import Header from "./Components/Header/Header"
import Content from "./Pages/Content/Content"
import {useEffect} from "react"
import axios from "axios"
import {useAuth} from "./context/authContext/index"
import {useData} from "./context/dataContext/index"
import { userApiAction } from "./apiCalls"

function App() {
  const {setLogin} = useAuth()
  const {userDispatch, setLoading } = useData()
  useEffect(()=>{
    (()=>{
      axios.defaults.baseURL = "https://video-lib-api.herokuapp.com/"
      if(localStorage.getItem('token')){
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token')
        setLogin(true)
      }
    })()

  },[setLogin]);

  useEffect(()=>{
    (async()=>{
      setLoading(true)
      const {data} = await axios.get("/video");
      setLoading(false)
      userDispatch({type : "LOAD VIDEOLIST", payload : data.payload});
      userApiAction.loadUserData(userDispatch)
    })()
  },[userDispatch,setLoading])




  return (
    
    <div className="App">
      <Header/>
      <Content/>
    </div>
    

  );
}

export default App;
