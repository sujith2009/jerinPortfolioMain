import React, { useState } from "react";
import AboutCss from "../pages/About.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import projectsData from "../DataImages/projects.json";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  return (
    <div>
      <section className="bg-dark" id="myproject">
        <div className="container">
          <h3 className="text-center pt-5 text-warning mb-5">My Projects</h3>

          <div className="row">
            {projects.map((project, index) => (
              <div
                className={`col-12 col-sm-6 col-md-6 col-lg-4 mb-4 ${AboutCss.cardPaddingRes}`}
                key={index}
              >
                <div
                  className={`card bg-dark px-3 py-3 h-100 ${AboutCss.cardProjects}`}
                  style={{ width: "100%" }}
                >
                  <img
                    src={project.img}
                    className="card-img-top"
                    height="180px"
                    alt={project.heading}
                  />
                  <div className="card-body bg-dark">
                    <h5
                      className="card-title mb-3 text-white text-center fw-bold"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {project.heading}
                    </h5>
                    <p
                      className="card-text text-white"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {project.para}
                    </p>
                    <a
                      className="btn mb-3 mt-3 fw-bold px-2 py-2 d-flex align-items-center justify-content-center"
                      href={project.Visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "black",
                        fontFamily: "sans-serif",
                        color: "white",
                      }}
                    >
                      Visite
                      <FaArrowUpRightFromSquare className="fw-bold fs-3 text-white ps-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-white">"Future Projects"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
