import {Link} from "react-router-dom";
// import { useEffect } from "react";
import "./style.css";
import LoginImg from  "../../media/loginImg.svg"
// import {useAuth } from "../../context/auth/index"
const Login = () => {
  
//   const {getInput , getLogin , userInput , setUserInput , initialUser} = useAuth();
//   const {email , password} = userInput ;
//   useEffect(()=>{
//     setUserInput(initialUser)
//   },[])
  return(
    <div className = "loginContainer">
      <div className ="loginBox">
        
        <img src ={LoginImg} alt ="/"/>
        <div className ="loginBox_input">
        <div className ="loginBox_inner">
        <div style={{fontSize:"20px", fontWeight:"600"}}>Login</div>
        <input name = "email"   placeholder="-Email"  />
        <input name ="password"  type ="password" placeholder="-password"/>
        <button  className="loginBox_btn" >Log in</button>
        <div className="loginBox_account">New to site?<Link to ="/signup">Create a account</Link></div>
        </div>
        </div>

      </div>
    </div>
  )
}



export default Login