import axios from "axios";
import { toast } from "react-toastify";

const doLogin = async (userInput, state, navigate, setLogin) => {
  try {
    const { email, password } = userInput;
    const { data } = await axios.post("auth/login", { email, password });
    if (data.success) {
      setLogin(true);
      localStorage.setItem("token", data.token);
      navigate(state ? state?.from : "/");
      return console.log(data.msg);
    }
    console.log("failed");
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

const loadUserData = async (setLogin) => {
  try {
    const { data } = await axios.get("/user");
    console.log(data.userData);
    if (data.success) {
      setLogin(true);
    }
  } catch (error) {
    setLogin(false);
    console.log(error.response.data.msg);
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

const addVideoInDislike = async () => {
  try {
  } catch (error) {}
};

const addVideoToHistory = async () => {
  try {
  } catch (error) {}
};

const removeVideoFromHistory = async () => {
  try {
  } catch (error) {}
};
const createPlayist = async () => {
  try {
  } catch (error) {}
};

const removeHistory = async () => {
  try {
  } catch (error) {}
};

const removePlaylist = async () => {
  try {
  } catch (error) {}
};

const updatePlaylist = async () => {
  try {
  } catch (error) {}
};
export const userApiAction = {
  doLogin,
  doRegister,
  loadUserData,
  addVideoInLike,
  addVideoInDislike,
  addVideoToHistory,
  removeVideoFromHistory,
  createPlayist,
  removeHistory,
  removePlaylist,
  updatePlaylist
};
