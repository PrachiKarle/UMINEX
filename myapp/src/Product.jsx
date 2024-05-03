import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";
import Heading from "./Heading";

const Product = () => {
  const [deals, setDeals] = useState([]);
  const [seals, setSeals] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var deal = await axios.get("http://localhost:3000/deals");
    setDeals(deal.data);
    var seal = await axios.get("http://localhost:3000/seals");
    setSeals(seal.data);
    var recommend = await axios.get("http://localhost:3000/Recommended");
    setRecommended(recommend.data);
    var shops = await axios.get("http://localhost:3000/shop");
    setShop(shops.data);
  };

  return (
    <>
      <Heading val="Product" />
      <div className="row m-0 p-4 bg-light">
        {deals.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-4">
                <Products
                  img={val.img}
                  nm={val.nm}
                  des={val.des}
                  price={val.price}
                />
              </div>
            </>
          );
        })}
        {seals.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-4">
                <Products
                  img={val.img}
                  nm={val.nm}
                  des={val.des}
                  price={val.price}
                />
              </div>
            </>
          );
        })}
        {recommended.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-4">
                <Products
                  img={val.img}
                  nm={val.nm}
                  des={val.des}
                  price={val.price}
                />
              </div>
            </>
          );
        })}
        {shop.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-4">
                <Products
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
    </>
  );
};
export default Product;
