import React from "react";
import "./hero.css";
import ThemeContext from "../../Components/Theme/Theme";

import { useState, useEffect, useContext } from "react";

const Hero = () => {
  const { setAboutNav } = useContext(ThemeContext);
  const [mainBanner, setMainBanner] = useState(true);
  const [isCssHover, setIsCssHover] = useState(false);
  const [isHtmlHover, setIsHtmlHover] = useState(false);
  const [isJsHover, setIsJsHover] = useState(false);
  const [isReactHover, setIsReactHover] = useState(false);
  const [isRotateHover, setIsRotateHover] = useState(false);

  useEffect(() => {
    setAboutNav(false);
  }, [setAboutNav]);

  // Select the css root element
  const styleRoot = document.documentElement;

  const handleMouseEnter = (banner) => {
    switch (banner) {
      case "css":
        styleRoot.style.setProperty("--grey", "#336dfd");
        styleRoot.style.setProperty("--white", "#fdc333");

        setIsCssHover(true);
        setMainBanner(false);
        break;
      case "js":
        styleRoot.style.setProperty("--orange", "#B33CFD");
        styleRoot.style.setProperty("--grey", "#5D0D59");
        styleRoot.style.setProperty("--black", "#fff");
        styleRoot.style.setProperty("--white", "#B33CFD");

        setIsJsHover(true);
        setMainBanner(false);
        break;
      case "html":
        styleRoot.style.setProperty("--orange", "#FF5722");
        styleRoot.style.setProperty("--white", "#FF5722");
        styleRoot.style.setProperty("--grey", "#75240A");

        setIsHtmlHover(true);
        setMainBanner(false);
        break;
      case "react":
        styleRoot.style.setProperty("--grey", "#027272");
        styleRoot.style.setProperty("--orange", "#02FBA1");
        styleRoot.style.setProperty("--white", "#02FBA1");

        setIsReactHover(true);
        setMainBanner(false);
        break;
      default:
        // setMainBanner(true);
        break;
    }
  };

  const handleMouseLeave = () => {
    setMainBanner(true);
    setIsCssHover(false);
    setIsHtmlHover(false);
    setIsJsHover(false);
    setIsReactHover(false);

    styleRoot.style.setProperty("--orange", "#fdc333");
    styleRoot.style.setProperty("--grey", "#585858");
    styleRoot.style.setProperty("--black", "#000000");
    styleRoot.style.setProperty("--white", "#fff");
  };

  const reactRotateEnter = () => {
    setIsRotateHover(true);
  };

  const reactRotateLeave = () => {
    setIsRotateHover(false);
  };
  return (
    <>
      <div id="hero-section">
        <div className="banners">
          <h1>
            <div
              className={
                mainBanner ? "main-banner fade-out" : "main-banner fade-in"
              }
            >
              Hi, I'm <span>Jehd</span>
              <br />
              and I am a <br />
              <span>Passionate Web Developer,</span>
              <br />
              offering <br />
              <span>Innovative Web Solutions.</span>
            </div>

            <div
              className={
                isCssHover ? "css-banner fade-out" : "css-banner fade-in"
              }
              style={isCssHover ? { display: "block" } : { display: "none" }}
            >
              From basic styling to advanced techniques, CSS learning is my
              gateway to <br />
              <span>crafting beautiful</span> and
              <span> responsive websites.</span>
            </div>

            <div
              className={
                isHtmlHover ? "html-banner fade-out" : "html-banner fade-in"
              }
              style={isHtmlHover ? { display: "block" } : { display: "none" }}
            >
              HTML is the language that gives structure to my digital creations,
              empowering me to <span> communicate effectively </span> and
              <span> engage my audience online.</span>
            </div>

            <div
              className={isJsHover ? "js-banner fade-out" : "js-banner fade-in"}
              style={isJsHover ? { display: "block" } : { display: "none" }}
            >
              With JavaScript, I can breathe life into static web pages, handle
              user interactions, and build{" "}
              <span> complex functionalities </span> that
              <span> elevate the user experience </span>to new heights.
            </div>

            <div
              className={
                isReactHover ? "react-banner fade-out" : "react-banner fade-in"
              }
              style={isReactHover ? { display: "block" } : { display: "none" }}
            >
              With React.js, I can build blazing-fast, scalable, and interactive
              user interfaces that
              <span> revolutionize the way we experience the web.</span>
            </div>
          </h1>
        </div>
        <div className="ideas">
          <div
            className="rotate"
            onMouseEnter={reactRotateEnter}
            onMouseLeave={reactRotateLeave}
          >
            <div className="items">
              <div className="css">
                <img
                  src="assets/css-logo.svg"
                  alt="css logo"
                  id="cssImage"
                  onMouseEnter={() => handleMouseEnter("css")}
                  onMouseLeave={handleMouseLeave}
                />
                <div
                  className={
                    isCssHover
                      ? "css-bg bg item-none-blur bg-effect"
                      : "css-bg bg item-blur"
                  }
                ></div>
              </div>
            </div>
            <div className="items">
              <div className="js">
                <img
                  src="assets/js-logo.svg"
                  alt="js logo"
                  id="jsImage"
                  onMouseEnter={() => handleMouseEnter("js")}
                  onMouseLeave={handleMouseLeave}
                />
                <div
                  className={
                    isJsHover
                      ? "js-bg bg item-none-blur bg-effect"
                      : "js-bg bg item-blur"
                  }
                ></div>
              </div>
            </div>
            <div className="items">
              <div className="html">
                <img
                  src="assets/html-logo.svg"
                  alt="html logo"
                  id="htmlImage"
                  onMouseEnter={() => handleMouseEnter("html")}
                  onMouseLeave={handleMouseLeave}
                />
                <div
                  className={
                    isHtmlHover
                      ? "html-bg bg item-none-blur bg-effect"
                      : "html-bg bg item-blur"
                  }
                ></div>
              </div>
            </div>
            <div className="items">
              <div className="react">
                <img
                  src="assets/react-logo.svg"
                  alt="react logo"
                  id="reactImage"
                  onMouseEnter={() => handleMouseEnter("react")}
                  onMouseLeave={handleMouseLeave}
                />
                <div
                  className={
                    isReactHover
                      ? "react-bg bg item-none-blur bg-effect"
                      : "react-bg bg item-blur"
                  }
                ></div>
              </div>
            </div>
          </div>
          <img src="assets/mypic.png" alt="" className="mypic" />
          <div className="code-bg-container">
            <img
              src="assets/code-bg.png"
              alt="profile pic background"
              className={isRotateHover && "first-move-up"}
            />
            <img
              src="assets/code-bg.png"
              alt="profile pic background"
              className={isRotateHover && "second-move-up"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
