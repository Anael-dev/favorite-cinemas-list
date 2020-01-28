import React, { Fragment } from "react";

function Place(props) {
  const { name, deleteCampus } = props;

  return (
      <div
        className="place"
        style={{
          backgroundImage: 'url("../data/icons/iconfinder_Void.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "25px 25px",
          backgroundPosition: "0px 0px",
          paddingLeft: "30px",
        }}
      >
        {name}
        <button type="button" onClick={() => deleteCampus(name)}>
          Delete
        </button>
      </div>
  );
}
export default Place;
