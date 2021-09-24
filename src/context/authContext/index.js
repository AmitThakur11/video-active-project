import {createContext , useContext , useState } from "react";

export const authContext = createContext();


export default function AuthProvider({children}){
    const initialUser = {
        username : "",
        email : "",
        password : "",
        cpassword : ""
    }
    const [userInput , setUserInput] = useState(initialUser);
    const 

    const getInput = (e)=>{
        const {name , value} = e.target
        setUserInput((input)=>{
            return {...input , [name] : value}
        })
    }

    const login = ()=>{
        try{

        }catch(error){

        }
    }

    return <authContext.Provider value ={{getInput}}>
        {children}
        </authContext.Provider>

}

export const useAuth = ()=>useContext(authContext)