import React from "react";
import Heading from "./Heading";
import axios from "axios";
import "./App.css";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      msg: "",
    };
  }
  render() {
    const sendMsg = async (e) => {
      e.preventDefault();
      if (this.state.number.length == 10) {
        await axios.post(`http://localhost:3000/Contact`, this.state);
        alert("Message send Successfully!!!");
        this.setState({
          name: "",
          email: "",
          number: "",
          msg: "",
        });
      } else {
        alert("Invalid Mobile number");
      }
    };
    return (
      <>
        <Heading val="Contact Us" />
        <div className="row m-0 p-0">
          {/* map */}
          <div className="col-12 m-0 px-3 pt-5 pb-0" style={{height:"60vh"}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906132695!2d73.69814776226433!3d18.524870616700024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2z4KSq4KWB4KSj4KWHLCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLA!5e0!3m2!1shi!2sin!4v1714488132455!5m2!1shi!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 m-0 p-0">
            <div className="row m-0 py-5 px-3">
              <div className="col-lg-4 col-md-6 col-12 p-3 contact">
                <h1>Here to Help</h1>
                <h6>
                  Have a question? You may find an answer in our FAQs. But you
                  can also contact us:{" "}
                </h6>
                <h6>
                  268 St, South New York/NY 98944, United States.
                  Info@example.com{" "}
                </h6>{" "}
                <h1>(+222)-1800-2628</h1>
                <h6>Opening Hours: Everyday 9:00am - 6:00pm</h6>
              </div>

              <div className="col-lg-8 col-12 py-3 px-5 contact">
                <h1>Get in Touch</h1>
                <h6>
                  We would love to hear from you about our entire service. Your
                  comments and suggestions will be highly appreciated. Please
                  complete the form below.
                </h6>

                <form action="" onSubmit={(e) => sendMsg(e)}>
                  <div className="row m-0 p-0">
                    <div className="col-md-6 form-group my-3">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        className="form-control"
                        onChange={(e) =>
                          this.setState({
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group my-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group my-3">
                      <input
                        type="number"
                        value={this.state.number}
                        onChange={(e) =>
                          this.setState({ number: e.target.value })
                        }
                        placeholder="Your Number"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group my-3">
                      <textarea
                        name=""
                        id=""
                        value={this.state.msg}
                        onChange={(e) => this.setState({ msg: e.target.value })}
                        placeholder="Please enter Message"
                        className="form-control"
                        rquired
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-dark mx-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
