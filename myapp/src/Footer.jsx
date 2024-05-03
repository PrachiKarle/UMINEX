import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row m-0 p-5 pb-0 bg-light">
        <div className="col-12 text-center">
          <h1>Sign Up to Newsletter</h1>
          <h6 className="fw-normal w-50 m-auto my-3">
            Enter your email address to get $10 off your first order and free
            shipping. Updates information on Sales and Offers.
          </h6>
          <form action="" method="get" className="d-flex w-50 m-auto">
            <input
              type="email"
              className="form-control px-3 py-2 w-75"
              placeholder="Enter your email..."
              style={{ borderRadius: "25px" }}
            />
            <button className="btn text-light mx-2 px-4" style={{ borderRadius: "25px",backgroundColor:"#00A2C2" }}>Subscribe</button>
          </form>
        </div>

        <div className="col-12 mt-4 m-0 p-0">
            <div className="m-0 p-2 d-flex justify-content-between" style={{borderTop:"1px solid #E5E8EC"}}>
               <b className="fw-normal" style={{color:"gray",fontSize:"15px"}}>© 2024 Umino Store. All Rights Reserved</b>
               <div>
                <img src="Media/f1.png" className="img-fluid" alt="" />
               </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
