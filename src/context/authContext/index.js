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
    const [isLogin ,setLogin] = useState(localStorage.getItem('login'))

    // if(!isLogin){
    //     setLogin(localStorage.getItem('login'))
    // }
    

    const getInput = (e)=>{
        const {name , value} = e.target
        setUserInput((input)=>{
            return {...input , [name] : value}
        })
    }

    // useEffect(()=>{
    //     if(localStorage.getItem("token"))
    //     return userApiAction.loadUserData(setLogin)

    // },[isLogin])

   

    return <authContext.Provider value ={{getInput, userInput, isLogin : isLogin , setLogin}}>
        {children}
        </authContext.Provider>

}

export const useAuth = ()=>useContext(authContext)