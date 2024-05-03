import React from "react";

const about = [
  {
    main: "21M",
    title: "Products For Sale",
  },
  {
    main: "2.8M",
    title: "Happy Customer",
  },
  {
    main: "2.7M",
    title: "Partner Brand",
  },
  {
    main: "23M",
    title: "Growing Buyers",
  },
];
const About1 = [
  {
    img: "Media/img (1).png",
    t: "1. Perfect Space",
  },
  {
    img: "Media/img (2).png",
    t: "2.  Special Person",
  },
  {
    img: "Media/img (3).png",
    t: "3. Modern Office",
  },
];
const About = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="w-lg-50 w-md-75 w-100 text-center py-5">
            <p
              className="fw-bold"
              style={{ color: "rgb(0, 162, 194)", fontSize: "18px" }}
            >
              Welcome to UMINEX
            </p>
            <p className="h5 fw-bold">Our Perfect Store</p>
            <p
              className="w-50 m-auto"
              style={{ color: "rgb(85, 85, 85)", fontSize: "18px" }}
            >
              Over 20 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand, connect.
            </p>
          </div>
        </div>

        <div className="col-12 p-3">
          <img src="Media/about1.png" className="img-fluid" alt="" />
        </div>
        <div className="col-12 p-3">
          <div className="row">
            {about.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-12 p-3 text-center">
                    <p
                      className="fw-bold"
                      style={{ fontSize: "40px", color: "rgb(0, 162, 194)" }}
                    >
                      {val.main}
                    </p>
                    <h6 className="fw-bold">{val.title}</h6>
                    <h6
                      className="fw-normal"
                      style={{ color: "rgb(85, 85, 85)" }}
                    >
                      Class aptent taciti sociosqu litora torquent per conubia.
                    </h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="col-12 p-3">
          <div className="w-lg-50 w-md-75 w-100 text-center py-5">
            <p
              className="fw-bold"
              style={{ color: "rgb(0, 162, 194)", fontSize: "18px" }}
            >
              Why Choose Us
            </p>
            <h1>Over 20 Years Of Experience</h1>
            <h6
              className="w-50 m-auto"
              style={{ color: "rgb(85, 85, 85)", fontSize: "18px" }}
            >
              Class aptent taciti sociosqu ad litora torquent per conubia nostra
              per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt
              ut labore metus episcing.
            </h6>
          </div>
        </div>

        <div className="col-12 p-3">
          <div className="row m-0 p-0">
            {About1.map((val) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-12 p-3 pb-5">
                    <div className="w-100">
                      <img src={val.img} className="img-fluid" alt="" />
                      <h6 className="fw-bold">{val.t}</h6>
                      <h6 className="fw-normal" style={{color:"rgb(85, 85, 85)"}}>
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra per inceptos vel pretium lectus qua. Nunc
                        id cursus metus ididunt ut labore metus episcing.
                      </h6>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
