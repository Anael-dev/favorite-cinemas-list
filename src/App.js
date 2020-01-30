import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "../css/style.css";
import places from "../data/places_data";

import MapContiner from "./Map";
import List from "./List";

const App = () => {
  const [cinema, setCinema] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [valueInput, setValueInput] = useState("");

  const placesData = places;

  useEffect(() => {
    if (cinema) {
      console.log(`I clicked on ${cinema}`);
      addcinema(cinema);
      setFilterText(null);
      setCinema(null);
      setValueInput("");
      console.log(`My value is ${valueInput}`);
    }
  }, [cinema]);

  useEffect(() => {
    if (favourites.length) {
      console.log(`My favourites ${favourites}`);
    }
  }, [favourites]);

  function handleFilter(val) {
    setFilterText(val);
  }

  function handleInput(e) {
    let value = e.target.value.trim().toLowerCase();
    console.log("handling input", value);
    setValueInput(value);
    handleFilter(valueInput);
  }

  function handleClick(name) {
    setCinema(name);
  }

  function addcinema(val) {
    if (favourites.length < 1) {
      setFavourites([val]);
    }
    if (!favourites.includes(val)) {
      setFavourites([...favourites, val]);
    }
  }

  function deletecinema(name) {
    setFavourites(currentPlaces => currentPlaces.filter(x => x !== name));
  }

  return (
    <div className="wrapper">
      <div className="mapWrapper">
        <input
          type="text"
          name="filter"
          placeholder={"find your city..."}
          onChange={handleInput}
          value={valueInput}
        ></input>
        <MapContiner
          handleClick={handleClick}
          places={
            filterText
              ? placesData.filter(place =>
                  place.name.toLowerCase().includes(filterText)
                )
              : placesData
          }
        />
      </div>
      <List
        cinema={cinema}
        favourites={favourites}
        deletecinema={deletecinema}
        handleFilter={handleFilter}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      {/* <Movies /> */}
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
