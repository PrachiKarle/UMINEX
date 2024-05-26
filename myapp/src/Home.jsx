import React from "react";
import "./index.css";
import Slider from "./Slider";
import Offer from "./Offer";
import Items from "./Items";
import TopDeals from "./TopDeals";
import TopSeals from "./TopSeals";
import Deals from "./Deals";

const Home = (props) => {
  return (
    <>
      {/* carousel */}
      <Slider />
      {/* offers */}
      <Offer />
      {/* items */}
      <Items />
      {/* Top deals */}
      <TopDeals />
      {/* Top selling */}
      <TopSeals/>
      {/* deals & promotion */}
      <Deals />
    </>
  );
};

export default Home;
