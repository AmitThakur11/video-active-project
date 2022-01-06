import axios from "axios"
export const axiosInitializer =()=>{
        // https://video-lib-api.herokuapp.com/
    
        axios.defaults.baseURL = "http://localhost:5000/"
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token')
         
      
}