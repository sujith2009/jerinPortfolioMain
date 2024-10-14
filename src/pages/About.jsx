import React from "react";
import AboutCss from "../pages/About.module.css";
import backGroundImage from "../assets/Images/jerin.jpg";

const About = () => {
  return (
    <div>
      <section className="bg-dark pb-4" id="about">
        <div className="container px-5 py-4" id={`${AboutCss.about}`}>
          <div className="row">
            <h2 className="text text-center text-warning">
              About <span className="tex text-white fs-1 fw-bold">Me</span>
            </h2>
            <div className="col-md-12">
              <p className={`text mt-4 fs-5 text-white ${AboutCss.paraAbout}`}>
                " To secure a challenging position as a software professional
                where I can leverage my technical skills, creativity, and
                passion for innovation to deliver impactful solutions. I aim to
                contribute effectively to the company’s growth by driving
                high-quality software development, collaborating with
                cross-functional teams, and continuously enhancing my expertise
                in cutting-edge technologies. I am committed to achieving
                excellence, taking on new responsibilities, and advancing my
                career by embracing opportunities for learning and professional
                growth. "
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
