import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const Offer = () => {
  const [offers, setOffer] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var res = await axios.get("https://prachikarle.github.io/JSON-UMINEX/db.json");
    setOffer(res.data.offers);
  };
  return (
    <>
      <div className="row m-0 p-4">
        {offers.map((val) => {
          return (
            <>
              <div key={val.id}
                className="col-lg-4 col-md-6 col-10 m-lg-0 m-auto p-4 text-light d-flex"
                style={{ backgroundColor: val.bg, border: "10px solid white" }}
              >
                <div className="">
                  <h5>{val.des}</h5>
                  <h6 className="text-decoration-underline">{val.msg}</h6>
                </div>
                <div
                  className="img"
                  style={{ height: val.height, width: val.width }}
                >
                  <img src={val.img} className="img-fluid h-100 w-100" alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Offer;
