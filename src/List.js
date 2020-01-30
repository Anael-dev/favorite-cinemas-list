import React, { Fragment, useState } from "react";
import Place from "./Place";
import "../css/List.css";

function List(props) {
  const { favourites, deletecinema } = props;

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
          My Favourite Cinemas
        </h1>
        {favourites.length < 1 ? (
          <h2
            className="empty"
            style={{
              backgroundImage: 'url("../data/icons/iconfinder_GoldTicket.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "22px 22px",
              backgroundPosition: "0px 0px",
              paddingLeft: "25px",
              lineHeight: "1.5",
              opacity: "0.8"
            }}
          >
            Your list is empty, want to fill it?
          </h2>
        ) : (
          ""
        )}
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
