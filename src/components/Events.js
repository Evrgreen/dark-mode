import React from "react";



import {useDropdown} from "../hooks/useDropdown"




const countries = ["USA","England","France","China"]


export default function Events(){
     const [country,CountryDropdown,setCountry] = useDropdown("Countries",countries,"All")


    return(
           <CountryDropdown/>
    )
}