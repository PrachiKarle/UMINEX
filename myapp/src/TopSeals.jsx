import React from "react";
import Head from "./Head";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopSeals = () => {
  const [seals, setSeal] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var res = await axios.get("http://localhost:3000/seals");
    setSeal(res.data);
  };

  const nav = useNavigate();

  //Add to cart
  const add = async (id) => {
    var flag = false;
    if (window.confirm("Are you sure?")) {
      var account = await axios.get("http://localhost:3000/account");
      for (let x of account.data) {
        if (x.Login) {
          flag = true;
          var seals = await axios.get(`http://localhost:3000/seals/${id}`);
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            AddtoCart: [...x.AddtoCart, seals.data],
            total: x.total + seals.data.price,
          });
        }
      }
      if (!flag) {
        alert("Please Login First!!!");
        nav("/sign");
      }
    }
  };

  //buy
  const Buy = async (id) => {
    var flag = false;
    if (window.confirm("Are you sure?")) {
      var account = await axios.get("http://localhost:3000/account");
      for (let x of account.data) {
        if (x.Login) {
          flag = true;
          var seals = await axios.get(`http://localhost:3000/seals/${id}`);
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            BuyDetail: [...x.BuyDetail, seals.data],
          });
        }
      }
      if (!flag) {
        alert("Please Login First!!!");
        nav("/sign");
      }
    }
  };
  return (
    <>
      <div className="row m-0 p-5" style={{ backgroundColor: "#F1F3F7" }}>
        <Head val="Recommended Products" />

        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {seals.map((val) => {
              return (
                <>
                  <div
                    className="col-md-4 col-sm-6 col-12 m-0 p-2"
                    key={val.id}
                  >
                    <div
                      className="h-100 w-100 pt-3 px-2 d-flex"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="h-100 w-50">
                        <img src={val.img} className="img-fluid" alt="" />
                      </div>
                      <div className="h-100 w-50 py-3">
                        <b className="fw-normal" style={{ color: "#ADADAD" }}>
                          {val.nm}
                        </b>{" "}
                        <br />
                        <b className="text-dark fw-normal">{val.des}</b>
                        <div className="d-flex text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <h6 className="text-dark">${val.price}</h6>
                        <button
                          className="btn btn-danger my-1"
                          onClick={() => add(val.id)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => Buy(val.id)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSeals;
