import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [name, setName] = useState("");
  const [cart, setCart] = useState("");
  useEffect(() => {
    checked();
  });
  const checked = async () => {
    var res = await axios.get("https://prachikarle.github.io/JSON-UMINEX/db.json");
    for (let x of res.data.account) {
      if (x.Login == true) {
        setName(x.name);
        setCart(x.total);
      }
    }
  };

  return (
    <>
      <div
        className="navbar navbar-expand-lg px-5 mb-0"
        style={{ backgroundColor: "#253380" }}
      >
        {/* logo */}
        <NavLink to="/" className="navbar-brand">
          <img src="Media/logo.png" className="img-fluid" alt="" />
        </NavLink>

        <div className="mx-5 d-lg-flex d-none" id="select_tag">
          <select
            name=""
            className="px-2 py-1"
            style={{ border: "transparent", width: "32%" }}
          >
            <option value="">All Categories</option>
            <option value="">Macbook & PCs</option>
            <option value="">OLED & Smart TVs</option>
            <option value="">Phone & Mobile</option>
            <option value="">Tablet & iPad Pro</option>
            <option value="">Gamepad & Console</option>
            <option value="">Camera & Photo</option>
          </select>
          <input
            type="text"
            placeholder="I'm looking for..."
            className="p-2 px-4"
            style={{ border: "transparent", width: "60%" }}
          />
          <button className="btn_1 px-4 py-2">Search</button>
        </div>

        <div className="d-flex mx-2 sign">
          <i className="bi bi-person text-light"></i>
          <div className="text-light mx-2">
            <NavLink to="/signin" className="nav-link">
              Sign in
            </NavLink>
            {name ? <b>{name}</b> : <b>Account</b>}
          </div>
        </div>

        <div className="d-flex mx-2 sign">
          <i className="bi bi-cart2 text-light"></i>
          <div className="text-light mx-2">
            
              Cart
            <br />
            {cart ? <b>${cart}</b> : <b>0.00</b>}
          </div>
        </div>
      </div>

      {/* navbar2 */}
      <div className="navbar navbar-expand-lg bg-light">
        <div className="d-flex ms-2">
          <i className="bi bi-list text-dark fw-bold"></i>
          <div className="dropdown mx-2">
            <b data-bs-toggle="dropdown">
              All Department{" "}
              <i
                className="ms-5 bi bi-chevron-down fw-bold"
                style={{ fontSize: "12px" }}
              ></i>
            </b>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Electronics</li>
              <li className="dropdown-item">Home Audio</li>
              <li className="dropdown-item">Phone & Mobile</li>
              <li className="dropdown-item">Tablets & IPad Pro</li>
              <li className="dropdown-item">Camera & Photos</li>
            </ul>
          </div>
        </div>

        <button
          className="navbar-toggler mx-3"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar navbar-collapse collapse m-0 p-0" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-dark fw-bold">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-dark fw-bold">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link text-dark fw-bold">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link text-dark fw-bold">
                Blog
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-dark fw-bold">
                Contact 
              </NavLink>
            </li>
          </ul>

          <div className="d-lg-flex d-none me-5">
            <img
              src="Media/icon.png"
              className="img-fluid me-2 mt-1"
              style={{ height: "20px" }}
              alt=""
            />
            <b>Sale $20 Off Your First Order.</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
