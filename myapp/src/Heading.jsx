import React from "react";

const Heading = (props) => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center text-light"
        id="bg1"
      >
        <div>
          <h1>{props.val}</h1>
        </div>
      </div>
    </>
  );
};
export default Heading;