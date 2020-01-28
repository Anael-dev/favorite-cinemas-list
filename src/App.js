import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "../css/style.css";

import MapContiner from "./Map";
import List from "./List";

const App = () => {
  const [campus, setCampus] = useState("");
  const [selected, setSelected] = useState([]);

  function handleClick(name) {
    setCampus(name);
    console.log(`I clicked on ${campus}`);
    addCampus(name);
  }

  function addCampus(val) {
    if (selected.length < 1) {
      setSelected([val]);
    }
    if (!selected.includes(val)) {
      setSelected([...selected, val]);
    }
    console.log(`I selected ${selected}`);
  }

  function deleteCampus(name) {
    setSelected(currentPlaces => currentPlaces.filter(x => x !== name));
  }

  return (
    <div className="wrapper">
      <MapContiner handleClick={handleClick} />
      <List selected={selected} deleteCampus={deleteCampus} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
