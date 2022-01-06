import axios from "axios";
import { toast } from "react-toastify";


export const doLogin = async (userInput, state, navigate, setLogin,userDispatch,setLoading) => {
  try {
    const { email, password } = userInput;
    if( email === "" && password === ""){
      return toast.warn('Empty field')
  
    }
    setLoading(true)
    const { data } = await axios.post("auth/login", { email, password });
    setLoading(false)
    if (data.success) {
      setLogin(true);
      toast.success(data.msg)
      localStorage.setItem("token", data.token);
      localStorage.setItem("login", true);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem('token')
      navigate(state ? state?.from : "/");
      loadUserData(userDispatch,setLoading,setLogin)
      
    }
  } catch (error) {
    setLoading(false)
    toast.error(error.response.data.msg)
  }
};

export const doRegister = async (userInput, navigate , setLoading) => {
  const { username, email, password, cpassword } = userInput;
  if( cpassword === "" && email === "" && password === "" && cpassword===""){
    return toast.warn('Empty field')

  }
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
      toast.success(data.msg)
      navigate("/login")
    }
      
  } catch (error) {
    setLoading(false)
    toast.error(error.response.data.msg)
    
  }
};

export const loadVideoList = async (userDispatch,setLoading)=>{
  try{
    setLoading(true)
    const {data : {success , payload}} = await axios.get("/video");
    if(success){
      setLoading(false)
      userDispatch({type : "LOAD VIDEOLIST", payload :payload});
      
    }

  }catch(err){
    setLoading(false);
    toast.error(err.response.data.msg)

  }

}

export const loadUserData = async (userDispatch,setLoading,setLogin) => {
  try {
    setLoading(true)
    const { data } = await axios.get("/user");
    if (data.success) {
      setLoading(false)
      const {userData : {likedVideos,playlists , history}} = data
      userDispatch({type :"LOAD USER" , payload : {likedVideos,playlists,history}})
    }
  } catch(error) {
    setLoading(false)
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    userDispatch({type : "LOG OUT"})
    delete axios.defaults.headers.common["Authorization"];
    toast.info(error.response.data.msg)
    
  }
};
export const addVideoInLike = async ({videoId, userDispatch,setLoading}) => {
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

export const addVideoToHistory = async (videoId , userDispatch) => {
  try {
    
    const {data} = await axios.post(`/user/history/${videoId}`);
    
    if(data.success){
      userDispatch({type :"UPDATE HISTORY" , payload : data.userData.history})
    }
    
  } catch (error) {
    toast.error(error.response.data.msg)
  }
  
};

export const removeVideoFromHistory = async ({videoId,userDispatch,setLoading}) => {
  try {
    setLoading(true)
    const {data} = await axios.delete(`/user/history/${videoId}`);
    setLoading(false)
    if(data.success){

      userDispatch({type : "UPDATE HISTORY" , payload : data.userData.history})
      toast.success(data.msg)
    }
  } catch (error) {
    setLoading(false)
    toast.error(error.response.data.msg)
    
  }
};



export const createPlayist = async (playlist , userDispatch ,setLoading) => {
  try {
    
    const {data} = await axios.post(`/user/${playlist.video}/playlist`, {newTitle : playlist.title});
    if(data.success){
      userDispatch({type : "UPDATE PLAYLIST", payload : data.userData.playlists})
      toast.success(data.msg)
    }
  } catch (error) {
    toast.error(error.response.data.msg)

  }
};

export const removeHistory = async (userDispatch,setLoading) => {
  try {
    setLoading(true)
    const {data} = await axios.delete("/user/history/remove");
    setLoading(false)
    if(data.success){
      userDispatch({type : "UPDATE HISTORY" , payload : data.userData.history})
      toast.success(data.msg)
    }
  } catch (error) {
    setLoading(false)
    toast.error(error.response.data.msg)
    
  }
};

export const removePlaylist = async (playlistId, userDispatch,setLoading) => {
  try {
   
    const {data} = await axios.delete(`/user/playlist/${playlistId}`);
   
    if(data.success){
      userDispatch({type:"UPDATE PLAYLIST" , payload :data.userData.playlists})
      toast.success(data.msg)
    }
  } catch (error) {
    toast.error(error.response.data.msg)

  }
};

export const removeFromPlaylist = async({videoId,playlist,userDispatch , setLoading})=>{
  try{
    
    const {data} = await axios.delete(`/user/playlist/${playlist}/video/${videoId}`)
    
    if(data.success){
      userDispatch({type : "UPDATE PLAYLIST" , payload : data.userData.playlists})
      toast.success(data.msg)
    }
  }catch(error){
    toast.error(error.response.data.msg)
    
  }
}

export const updatePlaylist = async () => {
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
