import "./styles.css"
import Header from "./Components/Header/Header"
import {Content} from "./Pages"
import {useEffect ,useCallback} from "react"
import axios from "axios"
import {useAuth} from "./Context/authContext/index"
import {useData} from "./Context/dataContext/index"
import { userApiAction } from "./apiCalls"
import {axiosInitializer} from "./utils/axiosInitiializer"
function App() {
  const {setLogin , isLogin} = useAuth()
  const {userDispatch, setLoading } = useData()
  useEffect(()=>{
    axiosInitializer()
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
