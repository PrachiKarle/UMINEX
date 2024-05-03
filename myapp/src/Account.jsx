import axios from "axios";
import React, { useState, useEffect } from "react";
import Account1 from "./Account1";
import Sign from "./Sign";

const Account = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    loadData();
  }, []);
  const [data, setData] = useState([]);

  const loadData = async () => {
    var acc = await axios.get("http://localhost:3000/account");
    for (let x of acc.data) {
      if (x.Login) {
        setState(true);
        var res = await axios.get(`http://localhost:3000/account/${x.id}`);
        setData(res.data);
        break;
      }
    }
  };
  console.log(data);
  return (
    <>
      <div className="row m-0 p-0" style={{ backgroundColor: "#F1F3F6" }}>
        {state ? (
          <>
            <Account1 Dt={data} />
          </>
        ) : (
          <>
            <Sign/>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
