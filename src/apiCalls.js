import axios from "axios";
import { toast } from "react-toastify";
// import Loader from "./Components/Loader";

const doLogin = async (userInput, state, navigate, setLogin,userDispatch,setLoading) => {
  try {
    const { email, password } = userInput;
    setLoading(true)
    const { data } = await axios.post("auth/login", { email, password });
    setLoading(false)
    if (data.success) {
      setLogin(true);
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem('token')
      navigate(state ? state?.from : "/");
      loadUserData(userDispatch,setLoading)
      toast.success("User logged in ")
    }
  } catch (error) {
    setLoading(false)
    
    toast.error("login failed")
  }
};

const doRegister = async (userInput, navigate , setLoading) => {
  const { username, email, password, cpassword } = userInput;
  if (cpassword !== password) {
    return toast("Password doesn't match",username,email);

  }


  try {
    setLoading(true)
    const {data}= await axios.post("/auth/register",{ username ,
    email,
    password})
    setLoading(false)
    if(data.success){
      console.log(data)
      toast.success("Account created")
      navigate("/login")
    }
      
  } catch (error) {
    setLoading(false)
    toast.error("registeration failed")
  }
};

const loadUserData = async (userDispatch,setLoading) => {
  try {
    setLoading(true)
    const { data } = await axios.get("/user");
    setLoading(false)
    if (data.success) {
      userDispatch({type :"LOAD USER" , payload : data.userData})
      
    }
  } catch(error) {
    setLoading(false)
    toast.error("Something went wrong")
    
  }
};
const addVideoInLike = async ({videoId, userDispatch,setLoading}) => {

  
  try {
    
    const {data :{msg,success,userData : {likedVideos}}} = await axios.post(`/user/like/${videoId}`);
    
    if(success){
      userDispatch({type : "UPDATE LIKE" , payload :likedVideos })
      return toast.success(msg)
    }
  } catch (error) {
    toast.error("Something went wrong")
  }
};

const addVideoToHistory = async (videoId , userDispatch) => {
  try {
    
    const {data} = await axios.post(`/user/history/${videoId}`);
    
    if(data.success){
      userDispatch({type :"UPDATE HISTORY" , payload : data.userData.history})
    }
    
  } catch (error) {
    toast.error("Something went wrong")
  }
  
};

const removeVideoFromHistory = async ({videoId,userDispatch,setLoading}) => {
  try {
    setLoading(true)
    const {data} = await axios.delete(`/user/history/${videoId}`);
    setLoading(false)
    if(data.success){

      userDispatch({type : "UPDATE HISTORY" , payload : data.userData.history})
      toast.success("Video removed")
    }
  } catch (error) {
    setLoading(false)
    toast.error("Something went wrong")
  }
};



const createPlayist = async (playlist , userDispatch ,setLoading) => {
  try {
    
    const {data} = await axios.post(`/user/${playlist.video}/playlist`, {newTitle : playlist.title});
    
    if(data.success){
      userDispatch({type : "UPDATE PLAYLIST", payload : data.userData.playlists})
      toast.success("Playlist created")
    }
  } catch (error) {
    
    toast.error("Something went wrong")
  }
};

const removeHistory = async (userDispatch,setLoading) => {
  try {
    setLoading(true)
    const {data} = await axios.delete("/user/history/remove");

    setLoading(false)
    if(data.success){
      userDispatch({type : "UPDATE HISTORY" , payload : data.userData.history})
      toast.success("History cleared")
    }
  } catch (error) {
    setLoading(false)
    toast.error("Something went wrong")
  }
};

const removePlaylist = async (playlistId, userDispatch,setLoading) => {
  try {
   
    const {data} = await axios.delete(`/user/playlist/${playlistId}`);
   
    if(data.success){
      userDispatch({type:"UPDATE PLAYLIST" , payload :data.userData.playlists})
      toast.success("Playlist removed")
    }
  } catch (error) {
    toast.error("Something went wrong")
  }
};

const removeFromPlaylist = async({videoId,playlist,userDispatch , setLoading})=>{
  try{
    
    const {data} = await axios.delete(`/user/playlist/${playlist}/video/${videoId}`)
    
    if(data.success){
      userDispatch({type : "UPDATE PLAYLIST" , payload : data.userData.playlists})
      toast.success("playlist Update")

    }

  }catch(error){
    
    toast.error("Something went wrong")


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
  removeFromPlaylist,
  updatePlaylist
};
