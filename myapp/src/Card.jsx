import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = (props) => {
  const nav = useNavigate();

  //add to cart
  const add = async (id) => {
    if (window.confirm("Are you sure?")) {
      var flag = false;
      var acc = await axios.get(`https://prachikarle.github.io/JSON-UMINEX/db.json`);
      for (let x of acc.data.account) {
        if (x.Login) {
          flag = true;
          var deals = await axios.get(`https://prachikarle.github.io/JSON-UMINEX/db.json`);
          deals=deals.data.deals[id];
          x.AddtoCart=[...x.AddtoCart,deals.data];
          alert("Successfully added");
          
        }
      }
      if (!flag) {
        nav("/signin");
      }
    }
  };

  //buy
  const Buy = async (id) => {
    if (window.confirm("Are you sure?")) {
      var flag = false;
      var acc = await axios.get("https://prachikarle.github.io/JSON-UMINEX/db.json");
      for (let x of acc.data.account) {
        if (x.Login) {
          flag = true;
          var deals = await axios.get(`https://prachikarle.github.io/JSON-UMINEX/db.json`);
          deals=deals.data.deals[id];
          x.BuyDetails=[...x.BuyDetails,deals.data];
          alert("Successfully added");
        }
      }
      if (!flag) {
        nav("/signin");
      }
    }
  };

  return (
    <>
      <div className="card-header">
        <img src={props.img} className="img-fluid h-100" alt="" />
      </div>
      <div className="p-2 card-body">
        <h6 className="fw-normal" style={{ color: "#ADADAD" }}>
          {props.nm}
        </h6>
        <h6 className="fw-normal text-dark">{props.des}</h6>
        <div className="d-flex text-warning">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <h5 className="text-dark">${props.price}</h5>
      </div>
      <div className="card-footer d-flex m-auto">
        <button className="btn btn-danger mx-2" onClick={() => add(props.id)}>
          Add to Cart
        </button>
        <button className="btn btn-danger" onClick={() => Buy(props.id)}>
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Card;
