import React from "react";
import port1 from "../assets/images/port-1.jpg";
import port2 from "../assets/images/port-2.jpg";
import port3 from "../assets/images/port-3.jpg";
import port4 from "../assets/images/port-4.jpg";
import port5 from "../assets/images/port-5.jpg";
import port6 from "../assets/images/port-6.jpg";

const team = [
  {
    item: "Iteam Name 1",
    image: port1,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: port2,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: port3,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: port4,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: port5,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: port6,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
];

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 head">
            <h2>Team</h2>
          </div>
        </div>
        <div className="row team-main">
          {team.map((item) => {
            return (
              <div className="col-lg-3">
                <div className="team-iteam">
                  <div className="icon">
                    <div className="imgp">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="over">
                      <a href="#">
                        <img src="assets/images/plus.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h2>Adam Thomas</h2>
                    <h3>CEO</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus debitis sapiente tempora aut fuga
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
