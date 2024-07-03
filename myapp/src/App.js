import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sign from "./Sign";
import SignUp from "./SignUp";
import Forget from "./Forget";
import Cart from "./Cart";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import axios from "axios";

const App = () => {
  const [account,setAccount]=useState([]);
  useEffect(()=>{
    loadAccount();
  },[]);

  const loadAccount=async()=>{
     var acc=await axios.get("https://prachikarle.github.io/JSON-UMINEX/db.json");
     for(let x of acc.data.account){
        if(x.Login){
          setAccount(x);
        }
     }
  }
  console.log(account);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home/>} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/account" element={<Account account={account}/>}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
