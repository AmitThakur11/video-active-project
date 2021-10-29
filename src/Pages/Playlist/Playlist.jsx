import "./Playlist.css"
import {useData} from "../../context/dataContext/index"
import PlaylistCard from "../../Components/Cards/playlistCard/index"
import {Link} from "react-router-dom"
const Playlist = ()=>{
    const {user : {playlists}} = useData()
    return(
        <section>
            <div className ="playlist__title">Playlsts</div>
            <div className ="playlist__items">
                {
                    playlists.map((playlist)=>{
                        return<PlaylistCard playlist = {playlist} />
                            

                    })
                }


            </div>
        </section>
    )
}

export default Playlist