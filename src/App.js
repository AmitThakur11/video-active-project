import "./styles.css"
import Header from "./Components/Header/Header"
import Content from "./Pages/Content/Content"
import {useEffect} from "react"
import axios from "axios"
import {useAuth} from "./context/authContext/index"
import {useData} from "./context/dataContext/index"
import Loader from "./Components/Loader/index"

function App() {
  const {isLogin} = useAuth()
  const {loading ,userDispatch , setVideoList } = useData()
  useEffect(()=>{
    (()=>{
      axios.defaults.baseURL = "https://video-lib-api.herokuapp.com/"
      axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
    })()

  },[isLogin,userDispatch]);

  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get("/video");
      console.log(data)
      setVideoList(data.payload)
    })()
  },[userDispatch])

  return (
    <>{loading ? <Loader/>:
    <div className="App">
      <Header/>
      <Content/>
    </div>
    
}

    </>
  );
}

export default App;
