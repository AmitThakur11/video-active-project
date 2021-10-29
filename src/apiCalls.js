import axios from "axios";
import { toast } from "react-toastify";
// import Loader from "./Components/Loader";

const doLogin = async (userInput, state, navigate, setLogin) => {
  try {
    const { email, password } = userInput;
    const { data } = await axios.post("auth/login", { email, password });
    if (data.success) {
      setLogin(true);
      localStorage.setItem("token", data.token);
      navigate(state ? state?.from : "/");
      
    }
  } catch (error) {
    console.log(error.response.data.msg);
  }
};

const doRegister = async (userInput, state, navigate, setLogin) => {
  const { username, email, password, cpassword } = userInput;
  if (cpassword !== password) {
    return toast("Password doesn't match",username,email);

  }

  try {
      
  } catch (error) {}
};

const loadUserData = async (userDispatch) => {
  try {
    const { data } = await axios.get("/user");
    console.log(data.userData)
    if (data.success) {
      userDispatch({type :"LOAD USER" , payload : data.userData})
      
    }
  } catch (error) {
    
  }
};
const addVideoInLike = async (id, userDispatch) => {

  
  try {
    const {data :{msg,success,userData : {likedVideos}}} = await axios.post(`/user/like/${id}`);
    if(success){
      userDispatch({type : "UPDATE LIKE" , payload :likedVideos })
      return toast.success(msg)
    }
    toast(msg)


    
  } catch (error) {
    toast(error)
  }
};

const addVideoToHistory = async (videoId , userDispatch) => {
  try {
    const {data} = await axios.post(`/user/history/${videoId}`);
    console.log("data")
    console.log(data);
    if(data.success){
      userDispatch({type :"UPDATE HISTORY" , payload : data.userData.history})
    }
    
  } catch (error) {
    console.log(error.response)
  }
  
};

const removeVideoFromHistory = async (videoId,userDispatch) => {
  try {
    const {data} = await axios.delete(`/user/history/${videoId}`);
    if(data.success){

      userDispatch({type : "UPDATE HISTORY" , payload : data.userData.history})
      toast.success("Video removed")
    }
    console.log(data)
  } catch (error) {}
};



const createPlayist = async (playlist , userDispatch) => {
  try {
    const {data} = await axios.post(`/user/${playlist.video}/playlist`, {newTitle : playlist.title});
    
    if(data.success){
      userDispatch({type : "UPDATE PLAYLIST", payload : data.userData.playlists})
      toast.success("Playlist created")
    }
  } catch (error) {
    toast.error(error.response.data.msg)
  }
};

const removeHistory = async () => {
  try {
  } catch (error) {}
};

const removePlaylist = async () => {
  try {
  } catch (error) {}
};

const removeFromPlaylist = async(playlistId,videoId)=>{
  try{
    const {data} = await axios.delete(`/user/playlist/${playlistId}/video/${videoId}`)
    console.log(data)

  }catch(error){

  }
}

const updatePlaylist = async () => {
  try {
  } catch (error) {}
};
export const userApiAction = {
  doLogin,
  doRegister,
  loadUserData,
  addVideoInLike,
  addVideoToHistory,
  removeVideoFromHistory,
  createPlayist,
  removeHistory,
  removePlaylist,
  updatePlaylist
};
