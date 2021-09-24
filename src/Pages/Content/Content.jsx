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

const Content = () => {
  return (
    <section className="content-container">
      <SideBar />
      <div className="content">
        <Routes>
          <Route path = "/" element ={<Home/>}></Route>
          <Route path ="/likedvideos" element={<LikedVideos/>}/>
          <Route path ="/history" element = {<History/>}/>
          <Route Path = "/playlist" element = {<Playlist/>}/>
          <Route path = "video/:id" element={<PlayVideo/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path ="/signup" element ={<Signup/>}/>
        </Routes>
        
      </div>
    </section>
  );
};

export default Content;
