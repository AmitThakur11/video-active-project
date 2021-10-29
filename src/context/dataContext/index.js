import {createContext , useContext, useState  , useReducer} from "react";
// import axios from "axios";
export const dataContext = createContext();


export default function DataProvider({children}){
    // const [videoList , setVideoList] =useState([])
    const [loading, setLoading] = useState(false);
    const initialUserState = {
        videoList : [],
        username : "",
        likedVideos : [],
        history : [],
        playlists : []
    }

    const userReducer = (user , action)=>{
        const {type,payload} = action
       
        switch(type){
            case "LOAD VIDEOLIST":{
                return {...user , videoList : payload}
            }
            case "LOAD USER":{
                return {...user , username : "test 0",
                likedVideos : payload.likedVideos,
                history : payload.history,
                playlists : payload.playlists
                }
            }
            case "UPDATE LIKE" : {
                console.log(payload)
                return {...user , likedVideos : payload }
            }
            case "UPDATE HISTORY" : {
                return {...user , history : payload}
            }
            case "UPDATE PLAYLIST" : {
                return {...user , playlists : payload}
            }
            default:
                return user
        }

    }

    const [user , userDispatch] = useReducer(userReducer , initialUserState)
    // useEffect(() => {
    //     (async()=>{
    //         try{
    //             const {data} = await axios.get("/video");
    //             setVideoList(data.payload)

    //         }catch(error){

    //         }

    //     })()
        
    // },[])


    return <dataContext.Provider value ={{loading , setLoading , user , userDispatch}}>
        {children}
        </dataContext.Provider>

}

export  const useData = ()=>useContext(dataContext)