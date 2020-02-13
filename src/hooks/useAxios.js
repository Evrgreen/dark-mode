import React, {useState,useEffect} from "react";
import axios from "axios";

// 


export const useAxios = (link="")=>{

    const [data,setData] = useState([]);
    const [url,setUrl] = useState(link);

    useEffect(() => {
        if(url.length>1)
          axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [url]);


    return[data,setUrl]
}