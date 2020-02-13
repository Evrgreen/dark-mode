import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

import {useAxios} from "./hooks/useAxios"

import "./styles.scss";
const App = () => {
  const [coinData] = useAxios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
 


  return (
    <div className="App">
      <Navbar />
      <Router>
        <Events path="/events" />
        <Charts path="/" coinData={coinData} />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
