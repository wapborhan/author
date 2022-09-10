import React from "react";
import teamimg from "../assets/images/team.jpg";
import plus from "../assets/images/plus.png";

const team = [
  {
    item: "Adam Thomas",
    image: teamimg,
    deg: "CEO",
    link: {
      title: "Link",
      href: "#",
      img: plus,
    },
  },
  {
    item: "Nicholar Jonson",
    image: teamimg,
    deg: "CTO",
    link: {
      title: "Link",
      href: "#",
      img: plus,
    },
  },
  {
    item: "Hocking Sanson",
    image: teamimg,
    deg: "Co-Founder",
    link: {
      title: "Link",
      href: "#",
      img: plus,
    },
  },
  {
    item: "Anna Mallik",
    image: teamimg,
    deg: "Executive",
    link: {
      title: "Link",
      href: "#",
      img: plus,
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
                        <img src={item.link.img} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h2>{item.item}</h2>
                    <h3>{item.deg}</h3>
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
