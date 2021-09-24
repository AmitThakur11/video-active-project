import {createContext , useContext , useEffect , useState } from "react";
import axios from "axios";
export const dataContext = createContext();


export default function DataProvider({children}){
    const [videoList , setVideoList] =useState([])
    const [loading, setLoading] = useState(false);
    const initialUserState = {
        username : "",
        likedVideos : [],
        history : [],
        playlists : []
    }

    const userReducer = (user , action)=>{
        const {type,payload} = action
        switch(type){
            case "UPDATE LIKE" : {
                return {...user , likedVideos : payload}
            }
            case "UPDATE HISTORY" : {
                return {...user , history : payload}
            }
            case "UPDATE PLAYLIST" : {
                return {...user , playlists : payload}
            }
        }

    }

    const {user , userDispatch} = useReducer(userReducer , initialUserState)
    useEffect(() => {
        (async()=>{
            try{
                const {data} = await axios.get("/video");
                console.log(data.payload)
                setVideoList(data.payload)

            }catch(error){

            }

        })()
        
    }, [])


    return <dataContext.Provider value ={{videoList , loading , setLoading}}>
        {children}
        </dataContext.Provider>

}

export const useData = ()=>useContext(dataContext)