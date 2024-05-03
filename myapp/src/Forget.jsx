import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const nav = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");

  const check = async () => {
    var flag=false;
    var res = await axios.get("http://localhost:3000/account");
    for (let x of res.data) {
      if (x.mail == mail) {
        if (pass == cpass) {
          var reg =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
          if (reg.test(pass)) {
            await axios.patch(`http://localhost:3000/account/${x.id}`, {
              pass: pass,
            });
            alert("Password Changed Successfully");
            flag=true;
            nav("/signin");

          } else {
            alert("Please enter strong password");
          }
        } else {
          alert("Please enter same password");
        }
      }
    }
    if(!flag){
        alert("Invalid Email,Please enter correct email");
    }
  };

  const saveForm = (e) => {
    e.preventDefault();
    if (window.confirm("Are you Sure?")) {
        check();
    }
  };
  return (
    <>
      <div className="row m-0 p-5" style={{ backgroundColor: "white" }}>
        <div
          className="col-md-5 col-10 m-auto text-center p-5 bg-light"
          style={{ borderRadius: "25px" }}
        >
          <h2 className="text-center">Change Password</h2>
          <form
            action=""
            method="get"
            className="w-100"
            onSubmit={(e) => saveForm(e)}
          >
            <div className="form-group p-3">
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Email"
                className="p-2 form-control"
                required
              />
            </div>
            <div className="form-group p-3">
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Create New Password"
                className="p-2 form-control"
                required
              />
            </div>
            <div className="form-group p-3">
              <input
                type="password"
                value={cpass}
                onChange={(e) => setCPass(e.target.value)}
                placeholder="Reenter New Password"
                className="p-2 form-control"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 form-control my-3"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forget;
