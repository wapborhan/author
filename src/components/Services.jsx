import React from "react";
import ser1 from "../assets/images/ser-1.png";
import ser2 from "../assets/images/ser-2.png";
import ser3 from "../assets/images/ser-3.png";
import ser4 from "../assets/images/ser-4.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 head">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row services-main">
          <div className="col-lg-3">
            <div className="services-iteam">
              <div className="icon">
                <img src={ser1} alt="" />
              </div>
              <div className="services-content">
                <h2>Custom Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus debitis sapiente tempora aut fuga
                </p>
                <a className="ser-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="services-iteam">
              <div className="icon">
                <img src={ser2} alt="" />
              </div>
              <div className="services-content">
                <h2>Custom Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus debitis sapiente tempora aut fuga
                </p>
                <a className="ser-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="services-iteam">
              <div className="icon">
                <img src={ser3} alt="" />
              </div>
              <div className="services-content">
                <h2>Custom Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus debitis sapiente tempora aut fuga
                </p>
                <a className="ser-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="services-iteam">
              <div className="icon">
                <img src={ser4} alt="" />
              </div>
              <div className="services-content">
                <h2>Custom Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus debitis sapiente tempora aut fuga
                </p>
                <a className="ser-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
