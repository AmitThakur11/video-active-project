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
  const {loading ,userDispatch } = useData()
  useEffect(()=>{
    (()=>{
      axios.defaults.baseURL = "https://video-lib-api.herokuapp.com/"
      const token = localStorage.getItem('token')
      axios.defaults.headers.common["Authorization"] = token ;
      if(token){
        setLogin(true)
      }
    })()

  },[setLogin,userDispatch]);

  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get("/video");
      userDispatch({type : "LOAD VIDEOLIST", payload : data.payload});
      userApiAction.loadUserData(userDispatch)
    })()
  },[userDispatch])

  // useEffect(()=>{
  //   (async()=>{
  //     const {data}= await axios.get

  //   })()
  // })



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
