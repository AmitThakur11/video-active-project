import "./style.css"
import SignupImg from "../../media/signUpImg.svg"
import {useAuth} from "../../context/authContext/index"
import { userApiAction } from "../../apiCalls";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/dataContext";
const Signup = () => {
  const {getInput , userInput} = useAuth()
  const navigate =useNavigate()
  const {setLoading} = useData()

  return (
    <div className = "loginContainer">
      <div className ="loginBox">
        
        <img src ={SignupImg} alt ="/"/>
        <div className ="loginBox_input">
        <div className ="loginBox_inner">
        <div style={{fontSize:"20px", fontWeight:"600"}}>Register</div>
        <input name = "username" placeholder="-Name"  onChange = {(e)=>getInput(e)}/>
        <input name = "email" placeholder="-Email"  onChange = {(e)=>getInput(e)} />
        <input name = "password" type ="password"  placeholder="-Password"  onChange = {(e)=>getInput(e)}/>
        <input name = "cpassword" type ="password" placeholder="-Confirm password"  onChange = {(e)=>getInput(e)} />
        <button   className="loginBox_btn" onClick={()=>userApiAction.doRegister(userInput,navigate ,setLoading)}>Register</button>
        
        </div>
        </div>

      </div>
    </div>
  )
   
};

export default Signup;
