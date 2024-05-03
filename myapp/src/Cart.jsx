import axios from "axios";
import React, { useEffect, useState } from "react";
import Sign from "./Sign";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const [data, setD] = useState([]);
  const [acc, setAcc] = useState([]);
  const [ID, setID] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    var flag = false;
    var Account = await axios.get(`http://localhost:3000/account`);
    for (let x of Account.data) {
      if (x.Login) {
        flag = true;
        var res = await axios.get(`http://localhost:3000/account/${x.id}`);
        setD(res.data.AddtoCart);
        setAcc(res.data);
        setID(x.id);
      }
    }
    if (!flag) {
      setShow(true);
    }
  };

  //remove from cart
  const deleteData = async (id) => {
    if (window.confirm("Are you sure?")) {
      var filterData = data.filter((val) => {
        return val.id != id;
      });
      var res = data.filter((val) => {
        return val.id == id;
      });

      await axios.patch(`http://localhost:3000/account/${ID}`, {
        AddtoCart: filterData,
        total: acc.total - res[0].price,
      });
    }
  };

  //buy
  const Buy = async (id) => {
    if (window.confirm("Are you sure?")) {
      var res = data.filter((val) => {
        return val.id == id;
      });

      var filterData = data.filter((val) => {
        return val.id != id;
      });
      console.log(filterData);
      await axios.patch(`http://localhost:3000/account/${ID}`, {
        BuyDetail: [...acc.BuyDetail, res],
        buyCost: acc.buyCost + data.price,
        AddtoCart: filterData,
        total: acc.total - res.price,
      });
    }
  };

  return (
    <>
      {show ? (
        <Sign></Sign>
      ) : (
        <div className="row p-5 m-0">
          <div className="col-lg-8 col-md-10 col-12 m-auto">
            {data.length == 0 ? (
              <>
                <EmptyCart />
              </>
            ) : (
              <>
                <h3 className="text-center">Your Shopping Cart</h3>

                {data.map((val) => {
                  return (
                    <>
                      <div className="row m-0 p-5 bg-light my-4">
                        <div className="col-md-8">
                          <h5>
                            {val.nm} - ${val.price}
                          </h5>
                          <h6 className="fw-normal">{val.des}</h6>
                        </div>
                        <div className="col-md-4">
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() => deleteData(val.id)}
                          >
                            Remove
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => Buy(val.id)}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
