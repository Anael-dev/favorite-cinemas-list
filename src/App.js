import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "../css/style.css";
import places from "../data/places_data";

import MapContiner from "./Map";
import List from "./List";

const App = () => {
  const [cinema, setcinema] = useState("");
  const [selected, setSelected] = useState([]);

  function handleClick(name) {
    setcinema(name);
    console.log(`I clicked on ${cinema}`);
    addcinema(name);
  }
  function handleFilter(val) {
    const filtered = places.filter(place => place.name.includes(val));
    console.log(filtered);
    // if (filtered.length > 1) {
    //   setSelected([filtered]);
    // }
  }

  function addcinema(val) {
    if (selected.length < 1) {
      setSelected([val]);
    }
    if (!selected.includes(val)) {
      setSelected([...selected, val]);
    }
    console.log(`I selected ${selected}`);
  }

  function deletecinema(name) {
    setSelected(currentPlaces => currentPlaces.filter(x => x !== name));
  }

  return (
    <div className="wrapper">
      <MapContiner handleClick={handleClick} places={places} />
      <List
        places={places}
        selected={selected}
        deletecinema={deletecinema}
        handleFilter={handleFilter}
      />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
