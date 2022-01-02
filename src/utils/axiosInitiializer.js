import axios from "axios"
export const axiosInitializer =()=>{
    
        axios.defaults.baseURL = "https://video-lib-api.herokuapp.com/"
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token')
         
      
}