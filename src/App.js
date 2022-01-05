import "./styles.css"
import Header from "./Components/Header/Header"
import {Content} from "./Pages"
import {useEffect} from "react"
// import axios from "axios"
import {useAuth} from "./Context/authContext/index"
import {useData} from "./Context/dataContext/index"
import { loadVideoList , loadUserData} from "./apiCalls"
import {axiosInitializer} from "./utils/axiosInitiializer"
function App() {
  const {setLogin , isLogin} = useAuth()
  console.log("isLogin",isLogin)
  const {userDispatch, setLoading } = useData()
  useEffect(()=>{
    axiosInitializer()
  },[setLogin]);



  useEffect(()=>{
    (()=>{
      loadVideoList(userDispatch,setLoading,isLogin)
      isLogin && loadUserData(userDispatch,setLoading,setLogin)
      


    })()

  },[isLogin,setLoading, setLogin,userDispatch])




  return (
    
    <div className="App">
      <Header/>
      <Content/>
    </div>
    

  );
}

export default App;
