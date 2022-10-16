import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:faizanst077@gmail.com" className="p-text">
             faizanst077@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 7012241785" className="p-text">
            +91 7012241785
          </a>
        </div>
        <div className="app__footer-card">
          <img style={{width:'60px'}} src="data:image/png;base64,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" alt="phone" />
          <a href="https://drive.google.com/file/d/1zO6Ownj9saIyJvKbmj5wVNCKPrrCQ6_m/view?usp=sharing" className="p-text">
           My Resume
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
