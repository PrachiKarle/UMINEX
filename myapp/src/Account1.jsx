import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Account1 = (props) => {
  
  const cancelOrder = async (id) => {
    var res = data.filter((val) => {
      return val.id != id;
    });
    setData(res);
    var res1 = data.filter((val) => {
      return val.id == id;
    });
    await axios.patch(`http://localhost:3000/account/${props.Dt.id}`, {
      BuyDetail: res,
      buyCost: props.Dt.buyCost - res1[0].price,
    });
  };

  
  //Buy product details
  useEffect(() => {
    loadData1();
  }, []);
  const [data, setData] = useState([]);
  const loadData1 = async () => {
    var res = await axios.get(`http://localhost:3000/account/${props.Dt.id}`);
    setData(res.data.BuyDetail);
  };

  const nav = useNavigate();
  //Edit account information
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    setName(props.Dt.name);
    setMail(props.Dt.mail);
    setPass(props.Dt.pass);
  };

  const Edit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/account/${props.Dt.id}`, {
      name: name,
      mail: mail,
      pass: pass,
    });
    alert("Updated successfully");
    nav("/");
  };

  //orders
  const [order, setOrder] = useState(false);
  const [setting, setSetting] = useState(true);
  const change1 = () => {
    setOrder(true);
    setSetting(false);
  };
  const change2 = () => {
    setOrder(false);
    setSetting(true);
  };

  //logout
  const logout = async () => {
    await axios.patch(`http://localhost:3000/account/${props.Dt.id}`, {
      Login: false,
    });
    alert("Logout successfully!!!");
    nav("/");
  };
  //delete Account
  const deleteAcc = async () => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:3000/account/${props.Dt.id}`);
      alert("Account Deleted!!!");
      nav("/");
    }
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
            <h5 className="mx-4">Hello, {props.Dt.name}</h5>
          </div>

          <div
            onClick={() => change1()}
            className="mt-2 p-3 d-flex justify-content-between"
            style={{
              borderBottom: "1px solid #F0F0F0",
              backgroundColor: "white",
            }}
          >
            <h5 className="text-secondary">My Orders </h5>{" "}
            <h5>
              <i className="bi bi-chevron-right text-secondary"></i>{" "}
            </h5>
          </div>

          <div
            onClick={() => change2()}
            className="p-3 text-secondary"
            style={{ backgroundColor: "white" }}
          >
            <h5>
              <i className="bi bi-person-fill"></i> Account Settings
            </h5>
            <h6 className="fw-normal text-primary my-3">Profile Information</h6>
            <h6 className="fw-normal my-3">Manage Addreses</h6>
            <h6 className="fw-normal my-3">Pan card Information</h6>
          </div>

          <div
            className="p-3 my-2"
            style={{ backgroundColor: "white" }}
            onClick={() => logout()}
          >
            <h5 className="text-secondary">
              <i className="bi bi-box-arrow-left"></i> Logout
            </h5>
          </div>
          <div
            className="p-3 my-2"
            style={{ backgroundColor: "white" }}
            onClick={() => deleteAcc()}
          >
            <h5 className="text-secondary">
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      placeholder="Enter new Email"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={pass}
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
                    <EmptyCart/>
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
