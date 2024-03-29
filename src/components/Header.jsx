import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <nav id="main-menu">
              <div className="menu">
                <ul>
                  <li>
                    <a className="active" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#price">Pricing</a>
                  </li>
                  <li>
                    <a href="#footer">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
