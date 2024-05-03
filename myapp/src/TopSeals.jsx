import React from "react";
import Head from "./Head";
import Cards1 from "./Cards1";
import axios from "axios";
import { useEffect, useState } from "react";

const TopSeals = () => {
  const [seals, setSeal] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var res = await axios.get("http://localhost:3000/seals");
    setSeal(res.data);
  };
  return (
    <>
      <div className="row m-0 p-5" style={{ backgroundColor: "#F1F3F7" }}>
        <Head val="Top Selling Products" />

        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {seals.map((val) => {
              return (
                <>
                  <div className="col-md-4 col-sm-6 col-12 m-0 p-2" key={val.id}>
                    <Cards1
                      img={val.img}
                      nm={val.nm}
                      des={val.des}
                      price={val.price}
                    />
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
