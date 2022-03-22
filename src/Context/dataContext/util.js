export const initialState = {
    videoList : [],
    username : "",
    likedVideos : [],
    history : [],
    playlists : []
}
export const userReducer = (user , action)=>{
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
        case "LOG OUT":{
            return {...user , likedVideos :[],playlists :[],history:[]}
        }
        default:
            return user
    }

}