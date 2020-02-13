import React from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () =>{
    const [mode,setMode] = useLocalStorage("darkMode", false)


    const setter=()=>{
        setMode(!mode)
    }
    return [mode,setter]
}