import React from "react";
import footbg from "../assets/images/footer.jpg";

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundImage: `url("${footbg}")`,
      }}
    >
      <div className="container">
        <div className="row">
          <h2>Contact US</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="foot-left">
              <h2>Get in touch with us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus dignissimos error expedita!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group mb-3 fot-form">
              <div className="fot-fm-left">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="fot-fm-right">
                <input
                  type="mail"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <textarea
              className="form-control foot-txt"
              aria-label="With textarea"
            ></textarea>

            <div className="btns">
              <a href="" className="btn">
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
