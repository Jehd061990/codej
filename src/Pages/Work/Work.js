import React from "react";
// import { Link } from "react-router-dom";
import "./work.css";
import ThemeContext from "../../Components/Theme/Theme";

import { useEffect, useContext } from "react";

const Work = () => {
  const { setWorkNav, setAboutNav } = useContext(ThemeContext);
  useEffect(() => {
    setWorkNav(true);
    setAboutNav(false);

    const workIndex = document.querySelector(".work-section .loader");
    const worksWrap = document.querySelector(".work-section .works");

    setTimeout(worksVisible, 1700);

    function worksVisible() {
      worksWrap.classList.remove("invisible");
    }

    window.addEventListener("scroll", function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY;

      // Get the height of the entire document
      var documentHeight = document.body.scrollHeight;

      // Get the height of the viewport
      var viewportHeight = window.innerHeight;

      // Calculate how far the user is from the bottom of the page
      var distanceToBottom = documentHeight - (scrollPosition + viewportHeight);

      // You can set a threshold if you want
      // For example, if the distance to the bottom is less than 100 pixels, consider it as scrolled to the bottom
      var threshold = 100;

      if (distanceToBottom <= threshold) {
        // User has scrolled to the bottom of the page
        console.log("You've reached the bottom of the page!");
        // You can perform any actions here, like loading more content
        workIndex.classList.add("backward");
        workIndex.classList.remove("forward");
      } else {
        workIndex.classList.remove("backward");
        workIndex.classList.add("forward");
      }
    });
  }, [setWorkNav, setAboutNav]);

  return (
    <>
      <div className="work-section">
        <div className="loader forward">
          <div className="explore">
            <h1>Explore</h1>
          </div>
        </div>

        <div className="works invisible">
          <div className="wrapper">
            <div className="work">
              <a href="https://uno-chat-app.onrender.com/" target="_blank">
                <img src="assets/uno-chat.png" alt="first project" />
              </a>

              <div className="details">
                <h5>
                  Welcome to my personal project: an elegant and simple chat app
                  inspired by popular social media platforms. I hope you enjoy
                  it!
                </h5>
                <button>
                  <a href="https://uno-chat-app.onrender.com/" target="_blank">
                    See Live
                  </a>
                </button>
              </div>
            </div>
            <div className="work">
              <a href="https://dp-blmo.onrender.com/" target="_blank">
                <img src="assets/dp-pic.png" alt="first project" />
              </a>
              <div className="details">
                <h5>
                  Welcome to Dwelling Plans, our web app project developed
                  during bootcamp. With Dwelling Plans, you can explore, choose,
                  and purchase the floorplans of your dream homes. Built using
                  Laravel, this application combines functionality with elegance
                  to enhance your home planning experience. We hope you enjoy
                  it!
                </h5>
                <button>
                  <a href="https://dp-blmo.onrender.com/" target="_blank">
                    See Live
                  </a>
                </button>
              </div>
            </div>
            <div className="work">
              <a href="https://jehd061990.github.io/MP1/" target="_blank">
                <img src="assets/destries.png" alt="first project" />
              </a>
              <div className="details">
                <h5>
                  Welcome to Destries, my MP1 project. The name Destries is a
                  delightful blend of "desserts" and "pastries," reflecting our
                  focus on delicious treats. This online store allows you to
                  order the most delectable foods you crave. I hope you enjoy
                  it!
                </h5>
                <button>
                  <a href="https://jehd061990.github.io/MP1/" target="_blank">
                    See Live
                  </a>
                </button>
              </div>
            </div>
            <div className="work">
              <a href="https://jehd061990.github.io/mp2/" target="_blank">
                <img src="assets/fg-pic.png" alt="first project" />
              </a>
              <div className="details">
                <h5>
                  Welcome to Food Gallery, our MP2 project. This app is designed
                  to help you explore and choose recipes for any dish you
                  prefer. In this project, I focused on the front end, while my
                  partner handled the back end. We hope you enjoy using Food
                  Gallery as much as we enjoyed creating it!
                </h5>
                <button>
                  <a href="https://jehd061990.github.io/mp2/" target="_blank">
                    See Live
                  </a>
                </button>
              </div>
            </div>

            <footer>
              <div>
                Copyright{" "}
                <span>
                  <img src="assets/copyright-white.svg" alt="copyright logo" />
                </span>{" "}
                Jcode. All Rights Reserved 2024
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
