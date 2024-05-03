import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const nav = useNavigate();

  //Add to cart

  const add = async (id) => {
    var flag = false;
    var acc = await axios.get(`http://localhost:3000/account`);
    for (let x of acc.data) {
      if (x.Login) {
        if (window.confirm("Are you sure?")) {
          flag = true;
          var deals = await axios.get(`http://localhost:3000/deals/${id}`);
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            total: deals.data.price + x.total,
            AddtoCart: [...x.AddtoCart, deals.data],
          });
        }
      }
    }
    if (!flag) {
      nav("/signin");
    }
  };

  //Buy product
  const Buy = async (id) => {
    var flag = false;

    var acc = await axios.get(`http://localhost:3000/account`);
    for (let x of acc.data) {
      if (x.Login) {
        if (window.confirm("Are you sure?")) {
          flag = true;
          var deals = await axios.get(`http://localhost:3000/deals/${id}`);
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            buyCost: deals.data.price + x.buyCost,
            BuyDetail: [...x.BuyDetail, deals.data],
          });
        }
      }
    }
    if (!flag) {
      nav("/signin");
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

export default Cards;
