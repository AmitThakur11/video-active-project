import "./Playlist.css"
import {useData} from "../../context/dataContext/index"
import PlaylistCard from "../../Components/Cards/playlistCard/index"
import EmptyIndicator from "../../Components/EmptyIndicator"
import EmptyImg from "../../media/emptyImg.png"
const Playlist = ()=>{
    const {user : {playlists}} = useData()

    return(
        <>
        {playlists.length ? <section>
            <div className ="playlist__title">Playlsts : {playlists.length}</div>
            <div className ="playlist__items">
                {
                    playlists.map((playlist)=>{
                        return<PlaylistCard playlist = {playlist} />
                            

                    })
                }


            </div>
        </section>:<EmptyIndicator img ={EmptyImg} title ="Empty Playlist" to="/"/>}
        </>
    )
}

export default Playlist