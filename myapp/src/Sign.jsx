import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const nav = useNavigate();
  const goTo = () => {
    nav("/signup");
  };

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const saveForm = async(e) => {
    var flag=false;
    e.preventDefault();
    var res = await axios.get("https://prachikarle.github.io/JSON-UMINEX/db.json");
    for (let x of res.data.account) {
      if (x.mail == mail && x.pass == pass) {
        alert("Login Succesfully");
        flag=true;
        nav('/');  
      }
    }
    if(!flag){
      alert("Invalid Login Details");
    }
  
  };

  return (
    <>
      {/* <Navbar username={username}/> */}
      <div className="row m-0 p-5" style={{ backgroundColor: "white" }}>
        <div
          className="col-md-5 col-10 m-auto text-center p-5 bg-light"
          style={{ borderRadius: "25px" }}
        >
          <h2 className="text-center">Sign in</h2>
          <b className="fw-normal text-center">
            Don't have an account yet? <b onClick={() => goTo()}>Sign up</b> for
            free
          </b>
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
                placeholder="Password"
                className="p-2 form-control"
                required
              />
            </div>
            <b onClick={()=>nav('/forget')}>Forget Your Password ?</b>
            <button
              type="submit"
              className="btn btn-dark w-100 form-control my-3"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Sign;
