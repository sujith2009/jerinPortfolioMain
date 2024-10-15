import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutCss from "../pages/About.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#1E201E" }}>
        <div className="container px-3 py-3 pt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column text-center">
                <h3
                  className="text fw-bold"
                  style={{ color: "#939185", fontFamily: "sans-serif" }}
                >
                  Jerin Sujith A
                </h3>
                <h5
                  className="text fw-bold"
                  style={{ color: "#939185", fontFamily: "sans-serif" }}
                >
                  jerinsujith640@gmail.com
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center">
                <a
                  className="text fs-3 pe-3"
                  href={
                    "https://www.linkedin.com/in/jerin-sujith-27b642287/?originalSubdomain=in"
                  }
                  style={{ color: "#939185", fontFamily: "sans-serif" }}
                >
                  <FaLinkedin />
                </a>

                <a
                  className="text fs-3 pe-3"
                  href="https://wa.me/916384582060"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#939185", fontFamily: "sans-serif" }}
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://github.com/sujith2009"
                  className="text fs-3"
                  style={{ color: "#939185", fontFamily: "sans-serif" }}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <hr className="text-white mt-4" />
            <h6
              className="text-center fw-bold pt-1"
              style={{ color: "#939185", fontFamily: "sans-serif" }}
            >
              © 2024 Jerin Sujith A.All Rights Reserved
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
