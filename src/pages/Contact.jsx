import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutCss from "../pages/About.module.css";
import ContactImage from "../assets/Images/contact.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const toastRef = useRef(null);
  const [formError, setFormError] = useState(false);
  const [inputValue, setInputValue] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  //inputChange
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const hasErrors = errorFunction();
    if (!hasErrors) {
      emailjs
        .sendForm("service_emesv1l", "template_cvcwa4e", form.current, {
          publicKey: "htIqqkIP4T4Vbe29K",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            // setInputValue({
            //   from_name: "",
            //   from_email: "",
            //   message: "",
            // });

            const toastElement = toastRef.current;
            const toast = new bootstrap.Toast(toastElement, {
              autohide: true,
              delay: 3000,
            });

            if (toastElement.classList.contains("show")) {
              toast.hide();
            }

            setTimeout(() => {
              toast.show();
            }, 200);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  //errorfunction
  const errorFunction = () => {
    let errorFound = false;
    if (inputValue.from_name === "") {
      setFormError(true);
      errorFound = true;
    }
    if (inputValue.from_email === "") {
      setFormError(true);
      errorFound = true;
    }
    if (inputValue.message === "") {
      setFormError(true);
      errorFound = true;
    }
    return errorFound;
  };
  return (
    <div>
      <section className="bg-dark" id="contact">
        <div className="container">
          <h3 className="text-center pt-5 text-warning fw-bold mb-2">
            Contact
          </h3>
          <h6
            className="text-center text-white fw-bold fs-4 mb-5"
            style={{ fontFamily: "sans-serif" }}
          >
            Fill out the form below and I will get back to you as soon as
            possible.
          </h6>
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <img
                  src={ContactImage}
                  className="img-fluid"
                  alt="IMG"
                  width={"450"}
                />
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={formSubmit} ref={form} id="liveToastBtn">
                {/*----NAME---*/}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white  fs-5"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    value={inputValue.from_name}
                    onChange={inputChange}
                    name="from_name"
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                  {inputValue.from_name === "" && formError ? (
                    <p
                      className="text mt-2"
                      style={{
                        color: "#FABC3F",
                        fontFamily: "sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      please enter your name
                    </p>
                  ) : null}
                </div>
                {/*--------EMAIL-----*/}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white  fs-5"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    value={inputValue.from_email}
                    onChange={inputChange}
                    name="from_email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                  {inputValue.from_email === "" && formError ? (
                    <p
                      className="text mt-2"
                      style={{
                        color: "#FABC3F",
                        fontFamily: "sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      please enter your email
                    </p>
                  ) : null}
                </div>
                {/*----TEXT AREA----*/}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label text-white  fs-5"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    value={inputValue.message}
                    onChange={inputChange}
                    name="message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                  {inputValue.message === "" && formError ? (
                    <p
                      className="text mt-2"
                      style={{
                        color: "#FABC3F",
                        fontFamily: "sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      please enter your email
                    </p>
                  ) : null}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn mb-3 mt-3 fw-bold px-3 py-2"
                    style={{
                      backgroundColor: "black",
                      fontFamily: "sans-serif",
                      color: "white",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/*---toasts message--*/}
            <div className="toast-container  position-fixed bottom-0 end-0 p-4">
              <div
                ref={toastRef}
                id="liveToast"
                className="toast fade bg-warning w-300"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body text-white fs-3">Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
