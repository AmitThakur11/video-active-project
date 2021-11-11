import {Link} from "react-router-dom";
import axios from "axios"
import "./style.css";
import {toast} from "react-toastify"
import LoginImg from  "../../media/loginImg.svg"
import {useAuth} from "../../context/authContext/index"
import { useLocation , useNavigate } from "react-router-dom";
import {userApiAction} from "../../apiCalls"
import { useData } from "../../context/dataContext";
const Login = () => {
  const{getInput,setLogin , userInput,isLogin} = useAuth();
  const {userDispatch} = useData()
  const navigate = useNavigate();
  const {state} = useLocation()
  const {doLogin}=userApiAction
  const testCredential = {email : "test0@gmail.com" , password : "test12345"}
  return(
    <div className = "loginContainer">
      {!isLogin?<div className ="loginBox">
        
        <img src ={LoginImg} alt ="/"/>
        <div className ="loginBox_input">
        <div className ="loginBox_inner">
        <div style={{fontSize:"20px", fontWeight:"600"}}>Login</div>
        <input name = "email"   placeholder="-Email" onChange ={(e)=>getInput(e)} />
        <input name ="password"  type ="password" placeholder="-password" onChange ={(e)=>getInput(e)}/>
        <div>
        <button  className="loginBox_btn" onClick = {()=>doLogin(userInput,state,navigate,setLogin,userDispatch)} >Log in</button>
        <button  className="loginBox_btn" onClick = {()=>doLogin(testCredential,state,navigate,setLogin,userDispatch)} >Demo</button>
        </div>
        <div className="loginBox_account">New to site?<Link to ="/signup">Create a account</Link></div>
        </div>
        </div>

      </div>:<div className ='logoutSection'>
      <img  src="https://i.ibb.co/12mbhbS/logout.png" alt="logout" border="0"/>
      <button className ='logoutBtn' onClick = {()=>{
        setLogin(false)
        navigate("/")
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        toast.success("User logged out")
        userDispatch({type : "LOG OUT"})
      }}>Logout</button>
        
       </div>}
    </div>
  )
}



export default Login