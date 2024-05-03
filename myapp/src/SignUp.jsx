import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const goTo = () => {
    nav("/signin");
  };
  const [mail, setMail] = useState("");
  const [mailerr, setMailerr] = useState("");
  const [pass, setPass] = useState("");
  const [passerr, setPasserr] = useState("");
  const [cpass, setCPass] = useState("");
  const [r,setR]=useState(null);

  const check1 = async () => {
    var res = await axios.get("http://localhost:3000/account");
    for (let x of res.data) {
      if (x.mail == mail) {
        setMailerr("Email Already exist,Please sign in");
        return false;
      }
    }
    setMailerr("");
    return true;
  };

  const saveForm = async (e) => {
    e.preventDefault();
    var reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    check1().then((res)=>setR(res))
    if (r) {
      if (cpass == pass) {
        if (reg.test(pass)) {
          alert("Account Created Successfully");
          var nm = mail[0].toUpperCase() + mail.slice(1, mail.indexOf("@"));
          await axios.post("http://localhost:3000/account", {
            mail: mail,
            pass: pass,
            name: nm,
          });
          setMail("");
          setPass("");
          nav("/signin");
        } else {
          setPasserr("Please Enter Strong Password");
        }
      }
      else{
        setPasserr("Please Enter Same Password");
      }
    }

  };

  return (
    <>
      <div className="row m-0 p-5" style={{ backgroundColor: "white" }}>
        <div
          className="col-md-5 col-10 m-auto text-center p-5 bg-light"
          style={{ borderRadius: "25px" }}
        >
          <h2 className="text-center">Sign Up</h2>
          <b className="fw-normal text-center">
            Already Account? <b onClick={() => goTo()}>Sign in</b>
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
              {mailerr ? <b className="text-danger">{mailerr}</b> : null}
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
              {passerr ? <b className="text-danger">{passerr}</b> : null}
            </div>
            <div className="form-group p-3">
              <input
                type="password"
                value={cpass}
                onChange={(e) => setCPass(e.target.value)}
                placeholder="Reenter Password"
                className="p-2 form-control"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 form-control my-3"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
