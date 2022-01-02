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
    <div className = "signUp__container">
      <div className ="signUp__box">
        
        <img src ={SignupImg} alt ="/"/>
        <div className ="signUp__boxInput">
        <div className ="signUp__boxInner">
        <div className="signUp__boxTitle">Register</div>
        <input name = "username" placeholder="Name"  onChange = {(e)=>getInput(e)}/>
        <input name = "email" placeholder="Email"  onChange = {(e)=>getInput(e)} />
        <input name = "password" type ="password"  placeholder="Password"  onChange = {(e)=>getInput(e)}/>
        <input name = "cpassword" type ="password" placeholder="Confirm password"  onChange = {(e)=>getInput(e)} />
        <button   className="signUp__boxBtn" onClick={()=>userApiAction.doRegister(userInput,navigate ,setLoading)}>Register</button>
        
        </div>
        </div>

      </div>
    </div>
  )
   
};

export default Signup;
