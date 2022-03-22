import React from 'react'
import "./style.css"
import { useData } from "../../Context/dataContext/index"
import { LibraryCard } from '../../Components/LibraryCard'
export default function Profile() {
    const { user } = useData()
    const userLibrary = [
        {
            id  : 1,
            title : "History",
            route : "/history"
        },
        {
            id  : 1,
            title : "Playlist",
            route : "/playlist"
        },
        {
            id  : 1,
            title : "Liked Videos",
            route : "/likedvideos"
        }
    ]
    return (
        <div className ="profileSection">
        <section className='userDetail'>
            <p className='userDetail__name'>{user.username}</p>
        </section>
        <section className='userLibrary'>
            {
                userLibrary.map((data)=>{
                    return <LibraryCard data ={data}/>
                })
            }
        </section>
           
        </div>
    )
}
