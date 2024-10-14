import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCss from "../conponents/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
//<IoMdClose />

//logo image

const Navbar = () => {
  const [list, setList] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "My Projects", link: "#myproject" },
    { name: "Contact", link: "#contact" },
  ]);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };
  const close = () => {
    setToggle(false);
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg container-fluid bg-dark position-fixed ${NavbarCss.navbarBackground}`}
      >
        <div className="container">
          <a
            className="navbar-brand ms-5 fw-bold fs-4 text-white"
            style={{ fontFamily: "sans-serif" }}
          >
            Jerin Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none", outline: "none" }}
            onClick={toggle ? close : handleToggle}
          >
            {/* <GiHamburgerMenu className="text-white fs-1" /> */}
            {toggle ? (
              <IoMdClose className="text-white fs-1" onClick={close} />
            ) : (
              <GiHamburgerMenu className="text-white fs-1" />
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {list.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link px-4  fs-5 ${NavbarCss.listItems}`}
                    href={item.link}
                    style={{ color: "#FABC3F" }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
