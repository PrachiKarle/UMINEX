import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const nav = useNavigate();
  const goTo = () => {
    nav("/");
  };
  return (
    <>
      <center>
        <img
          src="Media/cart.webp"
          className="img-fluid"
          style={{ height: "40vh", width: "60vh" }}
          alt=""
        />
        <h4 className="text-center">You Shopping Cart is Empty</h4>
        <b className="fw-normal">Add items to it now.</b> <br />
        <button className="btn btn-primary px-4 mt-3" onClick={() => goTo()}>
          Shop Now
        </button>
      </center>
    </>
  );
};

export default EmptyCart;
