import React from "react";
import teamimg from "../assets/images/team.jpg";

const team = [
  {
    item: "Iteam Name 1",
    image: teamimg,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
      img: "",
    },
  },
  {
    item: "Iteam Name 1",
    image: teamimg,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: teamimg,
    desc: "Iteam Discription 1",
    link: {
      title: "Link",
      href: "#",
    },
  },
  {
    item: "Iteam Name 1",
    image: teamimg,
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
