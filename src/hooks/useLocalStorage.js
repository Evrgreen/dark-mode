import React, {useState} from "react";

export const useLocalStorage = (key,initialValues="")=> {

const [values,setValues] = useState(()=>{
    const item = JSON.parse(localStorage.getItem(key))
    return item?item:initialValues;
})
const setter = (value) =>{
    setValues(value)
    localStorage.setItem(key,value)
}

return [values,setter]
}