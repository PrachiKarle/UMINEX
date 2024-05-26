import React, { useEffect, useState } from "react";
import Head from "./Head";
import axios from "axios"
import Card from "./Card";

const TopDeals = () => {
  const [deals,setDeals]=useState([]);
  useEffect(()=>{
    loadData();
  },[]);
  
  const loadData=async()=>{
    var res=await axios.get("http://localhost:3000/deals");
    setDeals(res.data);
  }
  return (
    <>
      <div className="row m-0 p-5">
        <Head val="Top Deals of Day" />

        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {deals.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-sm-6 col-12 m-0 p-2" >
                    <div className="" key={val.id}>
                      <Card
                        id={val.id}
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

export default TopDeals;
