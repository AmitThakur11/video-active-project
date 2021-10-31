import "./styles.css"
import Header from "./Components/Header/Header"
import Content from "./Pages/Content/Content"
import {useEffect} from "react"
import axios from "axios"
import {useAuth} from "./context/authContext/index"
import {useData} from "./context/dataContext/index"
import { userApiAction } from "./apiCalls"
import Loader from "./Components/Loader/index"
function App() {
  const {setLogin} = useAuth()
  const {loading ,userDispatch, setLoading } = useData()
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
      console.log(data.payload)
      userApiAction.loadUserData(userDispatch)
    })()
  },[userDispatch])

  // useEffect(()=>{
  //   (async()=>{
  //     const {data}= await axios.get

  //   })()
  // })



  return (
    
    <div className="App">
      <Header/>
      <Content/>
    </div>
    

  );
}

export default App;
