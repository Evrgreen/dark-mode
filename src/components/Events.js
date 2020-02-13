import React, {useState,useEffect} from "react";



import {useDropdown} from "../hooks/useDropdown"
import {useAxios} from "../hooks/useAxios"
import EventCard from "./EventCard"





export default function Events(){
       
       const [countries,setCountries] = useState([]);
       const [country,CountryDropdown,setCountry] = useDropdown("Countries",countries,"All")
       const [countryList] = useAxios("https://api.coingecko.com/api/v3/events/countries")
       const [events, setEventsUrl] = useAxios();

       useEffect(()=>{
              if(countryList.data){
                     const countryNames = countryList.data.map(({country,code})=>`${code}-${country}`);
                     setCountries(countryNames);
              }
       },[countryList])
       
       useEffect(()=>{
              const countryCode = country.slice(0,2);
              setEventsUrl(`https://api.coingecko.com/api/v3/events?country_code=${countryCode}`)
       },[country])



       return(
              <div>
              <CountryDropdown/>
              {events===Object(events)?
                     <EventCard events={events.data}/>
              :null}
              </div>
       )
}
       

              
