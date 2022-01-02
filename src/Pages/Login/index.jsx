import { Link } from "react-router-dom";
import axios from "axios"
import "./style.css";
import { toast } from "react-toastify"
import LoginImg from "../../Media/loginImg.svg"
import { useAuth } from "../../Context/authContext/index"
import { useLocation, useNavigate } from "react-router-dom";
import { userApiAction } from "../../apiCalls"
import { useData } from "../../Context/dataContext";
const Login = () => {
  const { getInput, setLogin, userInput, isLogin } = useAuth();
  const { userDispatch, setLoading } = useData()
  const navigate = useNavigate();
  const { state } = useLocation()
  const { doLogin } = userApiAction
  const testCredential = { email: "test0@gmail.com", password: "test12345" }
  return (
    <div className="loginContainer">
      {!isLogin ? <div className="loginBox">

        <img src={LoginImg} alt="/" />
        <div className="loginBox__input">
          <div className="loginBox__inner">
            <div className="loginBox__title">Login</div>
            <input name="email" placeholder="Email" onChange={(e) => getInput(e)} />
            <input name="password" type="password" placeholder="Password" onChange={(e) => getInput(e)} />
            <div className="btnFlex">
              <button className="loginBox__btn" onClick={() => doLogin(userInput, state, navigate, setLogin, userDispatch, setLoading)} >Log in</button>
              <button className="loginBox__btn" onClick={() => doLogin(testCredential, state, navigate, setLogin, userDispatch, setLoading)} >Demo</button>
            </div>
            <div className="loginBox__account">New to site?<Link to="/signup">Create a account</Link></div>
          </div>
        </div>

      </div> : <div className='logoutSection'>
        <button className='logoutBtn' onClick={() => {
          setLogin(false)
          navigate("/")
          localStorage.removeItem("token");
          localStorage.removeItem('login');
          delete axios.defaults.headers.common["Authorization"];
          toast.success("User logged out")
          userDispatch({ type: "LOG OUT" })
        }}>Logout</button>
        <img src="https://i.ibb.co/12mbhbS/logout.png" alt="logout" border="0" />


      </div>}
    </div>
  )
}



export default Login