import React, {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () =>{
    const [mode,setMode] = useLocalStorage("darkMode", false)
    
    useEffect(()=> {
        if(mode){
            document.querySelector("body").classList.add("dark-mode");
        }else{
            document.querySelector("body").classList.remove("dark-mode");
        }
    },[mode])



    const setter=()=>{
        setMode(!mode)
    }
    return [mode,setMode]
}