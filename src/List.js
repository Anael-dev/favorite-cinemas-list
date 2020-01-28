import React, { Fragment } from "react";
import Place from "./Place";

function List(props) {
  const { selected, deleteCampus } = props;
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
            backgroundImage: 'url("../data/icons/iconfinder_ic_play_circle_filled_white_48px_3669295.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "27px 27px",
            backgroundPosition: "0px 8px",
            paddingLeft: "32px",
          }}
        >
          My Favourite Cinemas List{" "}
        </h1>
        {selected.map(campus => (
          <li key={campus}>
            <Place key={campus.id} name={campus} deleteCampus={deleteCampus} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default List;
