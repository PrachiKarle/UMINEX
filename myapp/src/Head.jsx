import React from "react";

const Head = (props) => {
  return (
    <>
      <div className="col-12 m-0 p-2 heading">
        <h2 className="text-dark fw-bold">{props.val}</h2>
      </div>
    </>
  );
};

export default Head;