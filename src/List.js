import React, { Fragment, useState } from "react";
import Place from "./Place";
import "../css/List.css";

function List(props) {
  const { selected, deletecinema, handleFilter } = props;

  function handleInput(e) {
    const value = e.target.value.trim().toLowerCase();
    console.log(value);
    handleFilter(value);
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
          My Favourite Cinemas List{" "}
        </h1>
        <input
          type="text"
          name="filter"
          placeholder={"find your cinema"}
          onChange={handleInput}
        ></input>
        {selected.map(cinema => (
          <li key={cinema}>
            <Place key={cinema.id} name={cinema} deletecinema={deletecinema} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default List;
