import "./style.css";
import {Routes , Route} from "react-router-dom"
import SideBar from "../../Components/SideBar/SideBar";
// import Home from "../Home";
// import LikedVideos from "../LikedVideos";
// import History from "../History";
// import Playlist from "../Playlist";
// import Login from "../Login";
// import Signup from "../Signup";
// import PlayVideo from "../PlayVideo";

import { Home,LikedVideos , History , Playlist ,Login , Signup ,PlayVideo ,Profile } from "../../Pages";
import PrivateRoute from "../../Components/privateRoute";
import PlaylistData from "../Playlist/PlaylistData"
import Loader from "../../Components/Loader/index"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useData } from "../../Context/dataContext";
import Modal from "../../Components/Modal/Modal";
const Content = () => {
  const {loading , modal} = useData()
  return (
    <section className="content-container">
      <SideBar />
      {modal && <Modal title ="You need to sign in first." btn = {{title : "login" , to :"/login" }}/>}
      {loading ? <Loader/>:<div className="content">
        <Routes>
          <Route path = "/" element ={<Home/>}></Route>
          <Route path = "/video/:id" element={<PlayVideo/>}/>
          <PrivateRoute path ="/likedvideos" element={<LikedVideos/>}/>
          <PrivateRoute path ="/history" element = {<History/>}/>
          <PrivateRoute path = "/playlist" element = {<Playlist/>}/>
          <PrivateRoute path = "/playlist/:id" element = {<PlaylistData/>}/>
          <PrivateRoute path = "/profile" element = {<Profile/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path ="/signup" element ={<Signup/>}/>
        </Routes>


        <ToastContainer 
        position="top-right"
        autoClose={1500}
        width = "10px"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss = {false}
        draggable
        pauseOnHover ={false} />
       

      </div>}
    </section>
    
  );
};

export default Content;
