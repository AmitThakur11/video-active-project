import {Link} from "react-router-dom";

import "./style.css";
import LoginImg from  "../../media/loginImg.svg"
import {useAuth} from "../../context/authContext/index"
import { useLocation , useNavigate } from "react-router-dom";
import {userApiAction} from "../../apiCalls"
const Login = () => {
  const{getInput,setLogin , userInput,isLogin} = useAuth()
  const navigate = useNavigate();
  const {state} = useLocation()
  const {doLogin}=userApiAction
  return(
    <div className = "loginContainer">
      {!isLogin?<div className ="loginBox">
        
        <img src ={LoginImg} alt ="/"/>
        <div className ="loginBox_input">
        <div className ="loginBox_inner">
        <div style={{fontSize:"20px", fontWeight:"600"}}>Login</div>
        <input name = "email"   placeholder="-Email" onChange ={(e)=>getInput(e)} />
        <input name ="password"  type ="password" placeholder="-password" onChange ={(e)=>getInput(e)}/>
        <button  className="loginBox_btn" onClick = {()=>doLogin(userInput,state,navigate,setLogin)} >Log in</button>
        <div className="loginBox_account">New to site?<Link to ="/signup">Create a account</Link></div>
        </div>
        </div>

      </div>:<button onClick = {()=>{
        setLogin(false)
        navigate("/")
        localStorage.removeItem("token")
      }}>Logout</button>}
    </div>
  )
}



export default Login