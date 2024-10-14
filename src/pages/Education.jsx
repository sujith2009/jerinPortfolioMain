import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutCss from "../pages/About.module.css";
import { FaStarOfLife } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <section className="bg-dark" id="education">
        <div className="container">
          <div className="row">
            <h3 className="text-center text-warning mb-5">
              Education & Qualifications
            </h3>
            <div className="col-md-12 d-flex justify-content-center">
              <div
                className="accordion w-100"
                id="accordionPanelsStayOpenExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                      style={{
                        backgroundColor: "#FABC3F",
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      S.S.L.C
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body bg-dark">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            St. Mary's High School, Cuddalore
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Year Of Passing 2017-18
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Percentage - 78%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                      style={{
                        backgroundColor: "#FABC3F",
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      H.SC.,
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body bg-dark">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Don Bosco Higher Secondary School, Ariyalur
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Year Of Passing ----
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Percentage - 60%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                      style={{
                        backgroundColor: "#FABC3F",
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Under Graduate
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body bg-dark">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            St.Joseph's College of Arts & Science, Cuddalore
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            B.Sc. (Computer Science),
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Year Of Passing 2020-23
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Percentage - 79%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                      style={{
                        backgroundColor: "#FABC3F",
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Post Graduate
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body bg-dark">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            St. Joseph's College of Arts and Science,Cuddalore
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            M.Sc.,(Information Technology)
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Year Of Passing 2023-25
                          </p>
                        </div>

                        <div className="d-flex justify-content-start align-items-center">
                          <FaStarOfLife className="me-3 text-white" />
                          <p className="text-white fw-bold fs-5 m-0">
                            Percentage ----
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
