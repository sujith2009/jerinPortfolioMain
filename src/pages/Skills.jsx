import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../DataImages/data.json";
import AboutCss from "../pages/About.module.css";

const Skills = () => {
  return (
    <div>
      <section className="bg-dark" id="skills">
        <div className="container pt-5">
          <div className="row">
            <h2 className="text text-center text-warning">My Skills</h2>

            <div className="col-md-12 mt-5 d-flex flex-column align-items-center">
              {/* First Row: First 4 Images */}
              <div className="row  justify-content-center">
                {Data.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-3 p-5 d-flex flex-column align-items-center"
                    style={{ textAlign: "center" }}
                    id={`${AboutCss.padding}`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                      className="img-fluid mb-2" // Add margin-bottom to create space
                      style={{ width: 40, height: 40 }}
                    />
                    <p
                      className="text pt-2 fw-bold text-white" // Adjust padding for spacing
                      style={{ fontFamily: "sans-serif", textAlign: "center" }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row: Next 4 Images */}
              <div className="row justify-content-center">
                {Data.slice(4, 8).map((item, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-3 p-5 d-flex flex-column align-items-center mb-4"
                    id={`${AboutCss.padding}`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                      className="img-fluid mb-2" // Add margin-bottom to create space
                      style={{ width: 40, height: 40 }}
                    />
                    <p
                      className="text pt-2 fw-bold text-white" // Adjust padding for spacing
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
