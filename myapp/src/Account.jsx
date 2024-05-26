import React, { useState, useEffect } from "react";
import Account1 from "./Account1";

const Account = (props) => {
  return (
    <>
      <div className="row m-0 p-0" style={{ backgroundColor: "#F1F3F6" }}>
        <Account1 account={props.account}/>
      </div>
    </>
  );
};

export default Account;
