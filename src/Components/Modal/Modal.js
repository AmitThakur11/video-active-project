import React from 'react'
import { useData } from '../../context/dataContext';
import {useNavigate} from "react-router-dom";
import "./Modal.css"
function Modal({title , btn ,...props}) {
    const {setModal}  = useData()
    const navigate = useNavigate()
    
    return (
        <div className ="modalSection">
        <div className ="modal">
            <div className ="modalTitle">
                {title}
            </div>
            <div className ="modalBtn">
                <button className ="prmBtn" onClick = {()=>{
                    navigate(btn.to)
                    setModal(false)
                }
                }>{btn.title}</button>
                <button className ="scndBtn" onClick = {()=>setModal(false)} >Cancel</button>
            </div>
        </div>
        </div>
    )
}

export default Modal
