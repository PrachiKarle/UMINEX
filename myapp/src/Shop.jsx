import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";

const shop = [
  {
    img: "Media/shop1.jpg",
    des: "Macbook/PCs",
  },
  {
    img: "Media/shop2.jpg",
    des: "OLED/Smart TV",
  },
  {
    img: "Media/shop3.jpg",
    des: "Smart watch",
  },
  {
    img: "Media/shop4.jpg",
    des: "Camera-Photo",
  },
];

const Shop = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var res = await axios.get("http://localhost:3000/shop");
    setData(res.data);
  };

  const add = async (id) => {
    var flag = false;
    var product = await axios.get(`http://localhost:3000/shop/${id}`);
    var account = await axios.get(`http://localhost:3000/account`);
    if (window.confirm("Are you sure?")) {
      for (let x of account.data) {
        if (x.Login) {
          flag = true;
          await axios.patch(`http://localhost:3000/account/${x.id}`, {
            BuyDetail: [...x.BuyDetail, product.data],
          });
        }
      }
      if (!flag) {
        nav("/sign");
      }
    }
  };

  return (
    <>
      <Heading val="Shop"></Heading>
      <div className="row m-0 px-4 py-0">
        {shop.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-3">
                <div style={{ borderRadius: "40px" }} id="div1">
                  <img src={val.img} className="img-fluid" alt="" />
                  <button className="btn btn_3">{val.des}</button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="row m-0 px-4 py-3 bg-light">
        {data.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-4">
                <div
                  className="h-100 w-100 py-3"
                  style={{ backgroundColor: "white" }}
                >
                  <div>
                    <img src={val.img} className="img-fluid" alt="" />
                  </div>

                  <div className="px-4">
                    <h6 style={{ color: "#999999" }}>{val.nm}</h6>
                    <h6>{val.des}</h6>
                    <div className="d-flex">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <b className="py-3">${val.price}</b>
                  </div>

                  <button
                    className="btn btn-danger my-2"
                    style={{ marginLeft: "25%" }}
                    onClick={() => add(val.id)}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
