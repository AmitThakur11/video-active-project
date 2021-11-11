import "./styles.css"
import Header from "./Components/Header/Header"
import Content from "./Pages/Content/Content"
import {useEffect ,useCallback} from "react"
import axios from "axios"
import {useAuth} from "./context/authContext/index"
import {useData} from "./context/dataContext/index"
import { userApiAction } from "./apiCalls"

function App() {
  const {setLogin , isLogin} = useAuth()
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

  const loadData= useCallback(async()=>{
    setLoading(true)
      const {data} = await axios.get("/video");
      setLoading(false)
      userDispatch({type : "LOAD VIDEOLIST", payload : data.payload});
      isLogin && userApiAction.loadUserData(userDispatch,setLoading,setLogin)

  },[setLoading ,userDispatch,isLogin,setLogin])

  useEffect(()=>{
    (async()=>{
      loadData();
    })()
  },[loadData])




  return (
    
    <div className="App">
      <Header/>
      <Content/>
    </div>
    

  );
}

export default App;
