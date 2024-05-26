import axios from "axios";
import React, { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";

const Account1 = (props) => {
  const nav = useNavigate();

  const [setting, setSetting] = useState(false);
  const [order, setOrder] = useState(true);

  //buydetail
  const [data, setData] = useState([]);
  const [acc, setAcc] = useState([]);
  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    var account = await axios.get(
      `http://localhost:3000/account/${props.account.id}`
    );
    setData(account.data.BuyDetail);
    setAcc(account.data);
  };

  const change1 = () => {
    setSetting(true);
    setOrder(false);
  };

  const change2 = () => {
    setSetting(false);
    setOrder(true);
  };

  //logout
  const logout = async () => {
    await axios.patch(`http://localhost:3000/account/${props.account.id}`, {
      Login: false,
    });
  };

  //delete account
  const deleteAcc = async () => {
    await axios.delete(`http://localhost:3000/account/${props.account.id}`);
  };
  //account details edit
  const [name1, setName] = useState("");
  const [mail1, setMail] = useState("");
  const [pass1, setPass] = useState("");

  //submit edit form
  const Edit = async (e) => {
    e.preventDefault();
    var flag = true;
    if (name1 != "" || mail1 !="") {
      if (pass1 != "") {
        var regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (!regex.test(pass1)) {
          alert("Weak Password");
          flag = false;
        }
      }
      if (flag) {
        await axios.patch(`http://localhost:3000/account/${props.account.id}`, {
          name: name1,
          mail: mail1,
          pass: pass1,
        });
        alert("Successfully Editted");
        nav("/");
      }
    } else {
      alert("Please Enter  details");
    }
  };

  //cancel Order
  const cancelOrder = async (id) => {
    var BuyDetails = data.filter((val) => {
      return val.id != id;
    });
    await axios.patch(`http://localhost:3000/account/${props.account.id}`, {
      BuyDetail: BuyDetails,
    });
  };

  return (
    <>
      <div className="row p-5">
        <div className="col-md-3">
          <div
            className="p-2 d-flex align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <img src="Media/profile.svg" className="img-fluid" alt="" />
            <h5 className="mx-4">Hello, {props.account.name}</h5>
          </div>

          <div
            className="mt-2 p-3 d-flex justify-content-between"
            style={{
              borderBottom: "1px solid #F0F0F0",
              backgroundColor: "white",
            }}
          >
            <h5
              className="text-secondary"
              style={{ cursor: "pointer" }}
              onClick={() => change2()}
            >
              My Orders{" "}
            </h5>{" "}
            <h5>
              <i className="bi bi-chevron-right text-secondary"></i>{" "}
            </h5>
          </div>

          <div
            className="p-3 text-secondary"
            style={{ backgroundColor: "white", cursor: "pointer" }}
          >
            <h5 onClick={() => change1()}>
              <i className="bi bi-person-fill"></i> Account Settings
            </h5>
           
          </div>

          <div
            className="p-3 my-2"
            onClick={() => logout()}
            style={{ backgroundColor: "white" }}
          >
            <h5 className="text-secondary">
              <i className="bi bi-box-arrow-left"></i> Logout
            </h5>
          </div>
          <div className="p-3 my-2" style={{ backgroundColor: "white" }}>
            <h5 className="text-secondary" onClick={() => deleteAcc()}>
              <i className="bi bi-archive"></i> Delete Account
            </h5>
          </div>
        </div>

        <div className="col-md-9 px-3">
          <div
            className="h-100 w-100 px-5 py-3"
            style={{ backgroundColor: "white" }}
          >
            {setting ? (
              <>
                <h4>Edit Personal Information</h4>
                <form action="" onSubmit={(e) => Edit(e)}>
                  <div className="form-group my-3">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new Username"
                      value={name1}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={mail1}
                      onChange={(e) => setMail(e.target.value)}
                      placeholder="Enter new Email"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={pass1}
                      onChange={(e) => setPass(e.target.value)}
                      placeholder="Enter new Password"
                    ></input>
                  </div>
                  <div className="form-group my-3">
                    <button className="btn btn-primary" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </>
            ) : null}

            {order ? (
              <>
                {data.length == 0 ? (
                  <>
                    <EmptyCart />
                  </>
                ) : (
                  <>
                    <h5>My Orders</h5>
                    <div className="row m-0 p-4">
                      {data.map((val) => {
                        return (
                          <>
                            <div className="col-md-6 p-3">
                              <img src={val.img} className="img-fluid" alt="" />
                              <h5>{val.nm}</h5>
                              <h6>{val.des}</h6>
                              <h5>${val.price}</h5>

                              <button
                                className="btn btn-danger"
                                onClick={() => cancelOrder(val.id)}
                              >
                                Cancel order
                              </button>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account1;
