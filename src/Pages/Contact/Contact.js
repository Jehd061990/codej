import React, { useEffect, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import ThemeContext from "../../Components/Theme/Theme";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const { setAboutNav, setWorkNav } = useContext(ThemeContext);
  useEffect(() => {
    setAboutNav(false);
    setWorkNav(true);
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsMessageSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const resendMe = () => {
    setIsMessageSent(false);
  };

  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="title">
            <h1>Get In Touch</h1>
          </div>
          <div className="mid">
            <div className="contact-icons">
              <div className="cp margin settings">
                <img src="assets/icon-cp.svg" alt="smarhone icon" />
                <span>+63912345789</span>
              </div>
              <div className="phone settings">
                <img src="assets/icon-phone.svg" alt="telephone icon" />
                <span>082-222-3333</span>
              </div>
              <div className="mail settings">
                <img src="assets/icon-mail.svg" alt="mail icon" />
                <span>jehd.jehzer@gmail.com</span>
              </div>
              <div className="links">
                <img src="assets/icon-messenger.svg" alt="fb messenger icon" />
                <img src="assets/icon-linkedin.svg" alt="linkedin icon" />
                <img src="assets/icon-github.svg" alt="github icon" />
              </div>
            </div>
            {isMessageSent ? (
              <div className="email-sent">
                <div className="mail-status">
                  <h5>Your message has been successfully conveyed.</h5>
                  <div className="resend" onClick={resendMe}>
                    <img src="assets/resend.svg" alt="left arrow for resend" />
                    <span>Resend</span>
                  </div>
                </div>

                <div className="sent-container">
                  <img
                    src="assets/mail-box.png"
                    alt="mailbox"
                    className="mail-box"
                  />
                  <div className="envelope-container">
                    <img
                      src="assets/mail-envelope.png"
                      alt="envelope sent"
                      className="envelope"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <form className="email sending" ref={form} onSubmit={sendEmail}>
                <div className="address">
                  <label htmlFor="e-add">EMAIL</label>
                  <input
                    type="email"
                    name="from_email"
                    id=""
                    placeholder="Email-add"
                  />
                </div>
                <div className="message">
                  <label htmlFor="e-message">MESSAGE</label>
                  <textarea name="message" placeholder="Message"></textarea>

                  <div>
                    <button type="submit" value="Send">
                      submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <footer>
          <div>
            Copyright{" "}
            <span>
              <img src="assets/copyright-white.svg" alt="copyright logo" />
            </span>{" "}
            Jcode. All Rights Recerved 2024
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
