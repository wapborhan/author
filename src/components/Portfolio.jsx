import React from "react";
import port1 from "../assets/images/port-1.jpg";
import port2 from "../assets/images/port-2.jpg";
import port3 from "../assets/images/port-3.jpg";
import port4 from "../assets/images/port-4.jpg";
import port5 from "../assets/images/port-5.jpg";
import port6 from "../assets/images/port-6.jpg";

const port = [
  {
    item: "Iteam Name 1",
    image: port1,
    desc: "Iteam Discription 1",
    link: "#",
  },
  {
    item: "Iteam Name 1",
    image: port2,
    desc: "Iteam Discription 1",
    link: "#",
  },
  {
    item: "Iteam Name 1",
    image: port3,
    desc: "Iteam Discription 1",
    link: "#",
  },
  {
    item: "Iteam Name 1",
    image: port4,
    desc: "Iteam Discription 1",
    link: "#",
  },
  {
    item: "Iteam Name 1",
    image: port5,
    desc: "Iteam Discription 1",
    link: "#",
  },
  {
    item: "Iteam Name 1",
    image: port6,
    desc: "Iteam Discription 1",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 head">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          {port.map((item) => {
            return (
              <div className="col-lg-4">
                <div className="portfolio-iteam">
                  <div className="img rounded">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="overly rounded">
                    <div className="over-iteam">
                      <h2>{item.item}</h2>
                      <p>{item.desc}</p>
                      <a href="" className="btn btn-success px-4">
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="port-btn d-flex">
            <a href="#" className="btn btn-warning p-3">
              See All Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
