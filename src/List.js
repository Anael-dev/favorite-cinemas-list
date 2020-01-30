import React, { Fragment, useState } from "react";
import Place from "./Place";
import "../css/List.css";

function List(props) {
  const {
    favourites,
    deletecinema,
    handleFilter,
    valueInput,
    setValueInput
  } = props;

  function handleInput(e) {
    let value = e.target.value.trim().toLowerCase();
    console.log("handling input", value);
    setValueInput(value);
    handleFilter(valueInput);
  }
  return (
    <Fragment>
      <ul className="list">
        <div
          className="logo"
          style={{
            content: 'url("../data/images/black_logo.jpg")',
            width: "120px",
            opacity: "0.8"
          }}
        ></div>
        <h1
          style={{
            backgroundImage:
              'url("../data/icons/iconfinder_ic_play_circle_filled_white_48px_3669295.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "27px 27px",
            backgroundPosition: "0px 8px",
            paddingLeft: "32px",
            opacity: "0.8"
          }}
        >
          My Favourite Cinemas List
        </h1>
        <input
          type="text"
          name="filter"
          placeholder={"find your cinema"}
          onChange={handleInput}
          value={valueInput}
        ></input>
        {favourites.map(cinema => (
          <li key={cinema}>
            <Place key={cinema.id} name={cinema} deletecinema={deletecinema} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default List;
