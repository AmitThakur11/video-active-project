import "./Content.css";
import {Routes , Route} from "react-router-dom"
import SideBar from "../../Components/SideBar/SideBar";
import Home from "../Home/Home";
import LikedVideos from "../LikedVideos/LikedVideos";
import History from "../History/History";
import Playlist from "../Playlist/Playlist";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PlayVideo from "../PlayVideo/PlayVideo";
import PrivateRoute from "../../Components/privateRoute";
import Profile from "../profile/profile";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Content = () => {
  
  return (
    <section className="content-container">
      <SideBar />
      <div className="content">
        <Routes>
          <Route path = "/" element ={<Home/>}></Route>
          <Route path = "/video/:id" element={<PlayVideo/>}/>
          <PrivateRoute path ="/likedvideos" element={<LikedVideos/>}/>
          <PrivateRoute path ="/history" element = {<History/>}/>
          <PrivateRoute path = "/playlist" element = {<Playlist/>}/>
          <PrivateRoute path = "/profile" element = {<Profile/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path ="/signup" element ={<Signup/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </section>
  );
};

export default Content;
