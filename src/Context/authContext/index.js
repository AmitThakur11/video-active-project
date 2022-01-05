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
    const loginStatus = localStorage.getItem('login') === true ? true : false
    const [isLogin ,setLogin] = useState(loginStatus)


    const getInput = (e)=>{
        const {name , value} = e.target
        setUserInput((input)=>{
            return {...input , [name] : value}
        })
    }

   

    return <authContext.Provider value ={{getInput, userInput, isLogin : isLogin , setLogin}}>
        {children}
        </authContext.Provider>

}

export const useAuth = ()=>useContext(authContext)