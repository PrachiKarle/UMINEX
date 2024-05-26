import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cards1 = (props) => {
  const nav = useNavigate();

  //Add to cart
  const add = async (id) => {
    if (window.confirm("Are you sure?")) {
      var flag = false;
      var acc = await axios.get(`http://localhost:3000/account`);
      for (let x of acc.data) {
        if (x.Login) {
          flag = true;
          var deals = await axios.get(`http://localhost:3000/deals/${id}`);
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            total: deals.data.price + x.total,
            AddtoCart: [...x.AddtoCart, deals.data],
          });
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
      var acc = await axios.get("http://localhost:3000/account");
      for (let x of acc.data) {
        if (x.Login) {
          flag = true;
          var deals = await axios.get(`http://localhost:3000/deals/${id}`);
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            BuyDetail: [...x.BuyDetail, deals.data],
          });
        }
      }
      if (!flag) {
        nav("/signin");
      }
    }
  };

  return (
    <>
      <div
        className="h-100 w-100 pt-3 px-2"
        style={{ backgroundColor: "white" }}
      >
        <div className="h-100 w-50">
          <img src={props.img} className="img-fluid" alt="" />
        </div>
        <div className="h-100 w-50 py-3">
          <b className="fw-normal" style={{ color: "#ADADAD" }}>
            {props.nm}
          </b>{" "}
          <br />
          <b className="text-dark fw-normal">{props.des}</b>
          <div className="d-flex text-warning">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <h6 className="text-dark">${props.price}</h6>
          <button className="btn btn-danger my-1" onClick={() => add(props.id)}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={() => Buy(props.id)}>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards1;
