import {createContext , useContext } from "react";

export const userContext = createContext();


export default function AuthProvider({children}){
    


    return <userContext.Provider value ={{}}>
        {children}
        </userContext.Provider>

}

export const useUser = ()=>useContext(userContext)