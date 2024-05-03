import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Items = () => {
  const [item,setItem]=useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    var res=await axios.get("http://localhost:3000/item");
    setItem(res.data)
  };

  return (
    <>
      <div className="row m-0 px-4 d-flex">
        {item.map((val,ind) => {
          return (
            <>
              <div 
                className="col-lg-2 col-md-4 col-sm-6 col-8 m-sm-0 m-auto p-4 m-0"
              >
                <div className="d-flex img2 justify-content-center p-3 w-100 bg-light align-items-center" style={{borderRadius:"50%",height:"70%"}} key={ind}>
                  <img
                    src={val.img}
                    className="img-fluid h-75 w-75"
                    alt=""
                  />
                </div>
                <div className="text-center mt-1">
                  <b className="fw-bold text-dark">{val.mtit}</b><br />
                  <b className="fw-normal">{val.no} items</b>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Items;
