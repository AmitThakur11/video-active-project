import "./style.css"
import { useNavigate } from 'react-router-dom'

export const LibraryCard = ({data})=>{
    const {id,title,route} = data
    const navigate = useNavigate()
    return <div className='libraryCard' key= {id} onClick={()=>navigate(route)} >
        <p>{title}</p>
    </div>

}