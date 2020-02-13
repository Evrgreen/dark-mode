import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Router,Route,Link} from "@reach/router";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import {useDarkMode} from "./hooks/useDarkMode";
import Events from "./components/Events"

import "./styles.scss";
const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();
 
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode?'App dark-mode':"App"}>
      <button onClick={setDarkMode}>Toggle DarkMode</button>
      <Navbar />
        
          <Events path="/events"/>
          <Charts path="/" coinData={coinData} />
       

 );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/> , rootElement);


