import {createContext , useContext , useState , useEffect } from "react";
import { userApiAction } from "../../apiCalls";
export const authContext = createContext();


export default function AuthProvider({children}){
    


    const initialUser = {
        username : "",
        email : "",
        password : "",
        cpassword : ""
    }

    
    const [userInput , setUserInput] = useState(initialUser);
    const [isLogin ,setLogin] = useState(false)
    

    const getInput = (e)=>{
        const {name , value} = e.target
        setUserInput((input)=>{
            return {...input , [name] : value}
        })
    }

    useEffect(()=>{
        if(localStorage.getItem("token"))
        return userApiAction.loadUserData(setLogin)

    },[isLogin])

   

    return <authContext.Provider value ={{getInput, userInput, isLogin : isLogin , setLogin}}>
        {children}
        </authContext.Provider>

}

export const useAuth = ()=>useContext(authContext)