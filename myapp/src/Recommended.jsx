import React, { useEffect, useState } from "react";
import Head from "./Head";
import Cards from "./Cards";
import axios from "axios"

const Recommended = () => {
  const [deals,setDeals]=useState([]);
  useEffect(()=>{
    loadData();
  },[]);
  
  const loadData=async()=>{
    var res=await axios.get("http://localhost:3000/Recommended");
    setDeals(res.data);
  }
  return (
    <>
      <div className="row m-0 p-5">
        <Head val="Recommended for you" />

        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {deals.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-sm-6 col-12 m-0 p-2" >
                    <div key={val.id}>
                      <Cards
                        img={val.img}
                        nm={val.nm}
                        des={val.des}
                        price={val.price}
                      />
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

export default Recommended;
