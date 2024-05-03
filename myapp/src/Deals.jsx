import React from "react";
import Head from "./Head";
const ele = [
  {
    img: "Media/icon1.png",
    t: "Fast Delivery",
    st: "Deliver in 24 hours max!",
  },
  {
    img: "Media/icon2.png",
    t: "Safe Payment",
    st: "Visa, Mastercard, PayPal...",
  },
  {
    img: "Media/icon3.png",
    t: "Free Returns",
    st: "Free returns within 15 days",
  },
  {
    img: "Media/icon4.png",
    t: "Help Center",
    st: "Dedicated 24/7 support",
  },
];
const Deals = () => {
  return (
    <>
      <div className="row m-0 p-4 bg-light">
        <Head val="Deals and Promotion" />
        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-lg-4 col-md-6 m-lg-0 m-auto col-sm-10 col-12 p-4">
              <div className="bg-dark">
                <img src="Media/img31.jpg" className="img-fluid" alt="" />
              </div>
              <div className="p-2">
                <b className="fw-bold">Sale Off Unlimited - Buy 1 Get 2</b>{" "}
                <br />
                <b className="fw-normal">
                  Save 80% on order more than $599. Delivery in 1 days. Apply
                  for the first 1k Customers.
                </b>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-lg-0 m-auto col-sm-10 col-12 p-4">
              <div className="bg-dark">
                <img src="Media/img32.jpg" className="img-fluid" alt="" />
              </div>
              <div className="p-2">
                <b className="fw-bold">Cyber Monday - Save $599 On Speaker</b>
                <br />
                <b className="fw-normal">
                  Save 50% on order more than $99. Delivery in 1 days. Apply for
                  the first 1k Customers.
                </b>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-lg-0 m-auto col-sm-10 col-12 p-4">
              <div className="bg-dark">
                <img src="Media/img33.jpg" className="img-fluid" alt="" />
              </div>
              <div className="p-2">
                <b className="fw-bold">Hurry Up - Smartphone Only $299</b>
                <br />
                <b className="fw-normal">
                  All smartphone products at the same price $299. Delivery in 1
                  days. Apply for the first 1k Customers.
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0">
        {ele.map((val) => {
          return (
            <>
              <div className="col-md-3 col-sm-6 col-12 p-4 text-center">
                <img src={val.img} className="img-fluid" alt="" /><br />
                <b className="fw-normal">{val.t}</b> <br />
                <b className="fw-normal">{val.st}</b>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Deals;
