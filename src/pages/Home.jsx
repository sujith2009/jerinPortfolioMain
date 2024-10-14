import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import backGroundImage from "../assets/Images/jerin.jpg";
import HomeCss from "../pages/Home.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      <section className="bg-dark" id="home">
        <div className="container-fluid w-100 h-100">
          <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="d-flex flex-column align-items-start">
                <h1 className="display-4 fw-bold text-white">Hi There,</h1>
                <div className="d-flex">
                  <h1 className="display-4 fw-bold me-3 text-white">I'm</h1>
                  <h1
                    className="display-4 fw-bold"
                    style={{ color: "#EB8125" }}
                  >
                    Jerin Sujith
                  </h1>
                </div>
                <h3
                  className="display-6 fw-bold text-white"
                  style={{ fontFamily: "sans-serif" }}
                >
                  I Am Into
                  <span
                    style={{ color: "#06D001" }}
                    className="ms-2 me-2 fw-bold"
                  >
                    MERN STACK
                  </span>
                </h3>
                <div
                  className="d-flex align-items-center"
                  style={{
                    gap: "10px", // Space between the buttons
                    flexWrap: "wrap", // If the screen is small, wrap to a new line
                  }}
                >
                  <button
                    type="button"
                    className="btn mb-3 mt-3 fw-bold px-2 py-2"
                    style={{
                      backgroundColor: "#EB8125",
                      fontFamily: "sans-serif",
                      color: "white",
                    }}
                  >
                    Download CV
                    <IoCloudDownloadOutline className="fw-bold fs-3 text-white ps-2" />
                  </button>
                  <a
                    href="https://wa.me/916384582060"
                    className="btn mb-3 mt-3 px-2 py-2 fw-bold d-flex align-items-center"
                    type="button"
                    style={{
                      backgroundColor: "#06D001",
                      fontFamily: "sans-serif",
                      color: "white", // Ensure text color is white
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact With
                    <FaWhatsapp className="fw-bold fs-3 text-white ps-2" />
                  </a>
                </div>

                <div className={`d-flex fs-1 ${HomeCss.iconsDesign}`}>
                  <a
                    className="text-white"
                    href={
                      "https://www.linkedin.com/in/jerin-sujith-27b642287/?originalSubdomain=in"
                    }
                  >
                    <FaLinkedin className={` me-3 ${HomeCss.icons}`} />
                  </a>
                  <a href="#" className="text-white">
                    <FaGithub className={` me-3 ${HomeCss.icons}`} />
                  </a>
                  <a href="" className="text-white">
                    <FaSquareInstagram className={` me-3 ${HomeCss.icons}`} />
                  </a>
                </div>
                <h5 className="text mt-3 text-white">
                  Mail to jerinsujith640@gmail.com
                </h5>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={backGroundImage}
                className="img-fluid"
                alt="img"
                width={350}
                style={{ borderRadius: "10%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
