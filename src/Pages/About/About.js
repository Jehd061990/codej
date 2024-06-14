import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import ThemContext from "../../Components/Theme/Theme";

const About = () => {
  const { setAboutNav, setWorkNav } = useContext(ThemContext);

  useEffect(() => {
    setAboutNav(true);
    setWorkNav(false);
    const aboutPageSections = document.querySelectorAll(".section");

    const visible = () => {
      for (let i = 0; i < aboutPageSections.length; i++) {
        aboutPageSections[i].classList.remove("invisible");
      }
    };

    setTimeout(visible, 1500);

    // Intersection Observer for each section
    const sections = document.querySelectorAll(".about-page .bellow");

    const observeSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("seen", entry.isIntersecting);
          if (entry.isIntersecting) {
            observeSection.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    sections.forEach((section) => {
      observeSection.observe(section);
    });

    // Observer for stakeholders s
    const fStkholders = document.querySelectorAll(
      ".about-page .fourth .stakeholders img:nth-child(1)"
    );

    const fStake = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("going-right", entry.isIntersecting);
          if (entry.isIntersecting) {
            fStake.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    fStkholders.forEach((fstkholder) => {
      fStake.observe(fstkholder);
    });

    const sStkholders = document.querySelectorAll(
      ".about-page .fourth .stakeholders img:nth-child(2)"
    );

    const sStake = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("going-left", entry.isIntersecting);
          if (entry.isIntersecting) {
            sStake.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    sStkholders.forEach((fstkholder) => {
      sStake.observe(fstkholder);
    });

    return () => {
      sections.forEach((section) => observeSection.unobserve(section));
      fStkholders.forEach((fstkholder) => fStake.unobserve(fstkholder));
      sStkholders.forEach((fstkholder) => sStake.unobserve(fstkholder));
    };
  }, [setAboutNav, setWorkNav]);

  return (
    <div className="about-page">
      <div className="welcome">
        <h1>Welcome to my about page!</h1>
      </div>
      <div className="intro section container invisible">
        <div className="wrapper">
          <h3>
            My name is Jehdeiah Jehzer Jandoc, and I'm passionate about crafting
            immersive digital experiences as a full-stack web developer.
          </h3>
          <div className="profile-pic blurred seen">
            <div className="radius-bg"></div>
            <div className="this-is-me">
              <div className="right">this is me</div>
            </div>
            <img src="assets/myimage.png" alt="my profile " />
          </div>
        </div>
      </div>

      <div className="second section container invisible">
        <div className="wrapper">
          <h3>
            My journey into the world of coding began in 2022, sparked by my
            fascination with digital assets such as 3D models and NFTs.
            Curiosity led me to wonder if I could create and sell my own digital
            creations online.
          </h3>

          <div className="models-slider bellow blurred seen">
            <div className="slider-wrapper">
              <div className="slider">
                <img src="assets/nft1.png" alt="lumpia" />
                <img
                  src="https://i.pinimg.com/736x/b2/77/4a/b2774ade393c2612fbe949c7a7098930.jpg"
                  alt="brownies"
                />
                <img src="assets/nft3.png" alt="cake" />
                <img
                  src="https://p.turbosquid.com/ts-thumb/Co/se3r9W/LB/rigging/png/1654137497/1920x1080/fit_q87/5b94251711114e825521ba765e35d447d867886e/rigging.jpg"
                  alt="cookies"
                />
              </div>
              <div className="slider">
                <img
                  src="https://i.pinimg.com/736x/b2/77/4a/b2774ade393c2612fbe949c7a7098930.jpg"
                  alt="macaroni"
                />
                <img src="assets/nft6.png" alt="tapioca" />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodg2Yyfjxk5RBZjsx6Ra6edIeJNwp8U69Ld2f_S3oR3VmdOaiIhixvRsEHdQzAbHpVHU&usqp=CAU"
                  alt=" maja"
                />
                <img src="assets/nft2.png" alt="spaghetti" />
              </div>
            </div>

            <div className="wrapperCenter">
              <div className="sliderdown">
                <img
                  src="https://media.sketchfab.com/models/822e4dfaa1654d7ea12b697dd345c278/thumbnails/e507bd6358f94769bc8fd40b81785ea4/0add7bfed17d4472a4f151b3cd3fb072.jpeg"
                  alt="lumpia"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodg2Yyfjxk5RBZjsx6Ra6edIeJNwp8U69Ld2f_S3oR3VmdOaiIhixvRsEHdQzAbHpVHU&usqp=CAU"
                  alt="brownies"
                />
                <img src="assets/nft3.png" alt="cake" />
                <img
                  src="https://i.pinimg.com/736x/b2/77/4a/b2774ade393c2612fbe949c7a7098930.jpg"
                  alt="cookies"
                />
              </div>
              <div className="sliderdown">
                <img src="assets/nft5.png" alt="macaroni" />
                <img
                  src="https://i.pinimg.com/736x/b2/77/4a/b2774ade393c2612fbe949c7a7098930.jpg"
                  alt="tapioca"
                />
                <img
                  src="https://p.turbosquid.com/ts-thumb/Co/se3r9W/LB/rigging/png/1654137497/1920x1080/fit_q87/5b94251711114e825521ba765e35d447d867886e/rigging.jpg"
                  alt="maja"
                />
                <img
                  src="https://clara.io/resources/images/400x0/ae729fcca2f2912eb01f59c5ae9dcefc"
                  alt="spaghetti"
                />
              </div>
            </div>

            <div className="slider-wrapper">
              <div className="slider">
                <img
                  src="https://p.turbosquid.com/ts-thumb/Co/se3r9W/LB/rigging/png/1654137497/1920x1080/fit_q87/5b94251711114e825521ba765e35d447d867886e/rigging.jpg"
                  alt="lumpia"
                />
                <img src="assets/nft2.png" alt="brownies" />
                <img
                  src="https://i.pinimg.com/736x/b2/77/4a/b2774ade393c2612fbe949c7a7098930.jpg"
                  alt="cake"
                />
                <img src="assets/nft4.png" alt="cookies" />
              </div>
              <div className="slider">
                <img
                  src="https://p.turbosquid.com/ts-thumb/Co/se3r9W/LB/rigging/png/1654137497/1920x1080/fit_q87/5b94251711114e825521ba765e35d447d867886e/rigging.jpg"
                  alt="macaroni"
                />
                <img
                  src="https://i.pinimg.com/736x/b2/77/4a/b2774ade393c2612fbe949c7a7098930.jpg"
                  alt="tapioca"
                />
                <img src="assets/nft1.png" alt=" maja" />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodg2Yyfjxk5RBZjsx6Ra6edIeJNwp8U69Ld2f_S3oR3VmdOaiIhixvRsEHdQzAbHpVHU&usqp=CAU"
                  alt="spaghetti"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="third section container invisible">
        <div className="wrapper">
          <h3>
            Driven by the desire to make a meaningful impact, I envisioned
            digital assets that could enhance everyday life. This vision
            propelled me to dive into the world of web development, where I
            found the perfect canvas to bring my ideas to life.
          </h3>
          <div className="bz-work bellow blurred seen">
            <img
              src="assets/working-on-pc.png"
              alt="working on desktop computer"
            />

            <img
              src="assets/captionbox.png"
              alt="caption box saying I'm busy"
            />
          </div>
        </div>
      </div>

      <div className="fourth section container invisible">
        <div className="wrapper">
          <h3>
            As I delved deeper into mastering the art of building web
            applications, I discovered the profound utility they offer to
            digital marketers worldwide. From empowering businesses to connect
            with their audience to providing bloggers with a platform to share
            their stories, the potential of web apps is boundless.
          </h3>

          <div className="stakeholders bellow blurred seen">
            <img
              src="assets/stakeholdersample 2.png"
              className="first-pic"
              alt="stakeholders"
            />
            <img src="assets/stakeholdersample 3.png" alt="stakeholders" />
          </div>
        </div>
      </div>

      <div className="fifth section container invisible">
        <div className="wrapper" style={{ transform: "translateY(-50px)" }}>
          <h3>
            Today, I'm proud to be creating captivating websites that not only
            fascinate stakeholders but also enrich the online experience for
            users around the globe. Join me on this exciting journey as we push
            the boundaries of web development together.
          </h3>

          <Link to="/contact" className="hire-me-button bellow blurred seen">
            <img src="assets/hireme.png" alt="hire-me button" />
          </Link>
          {/* <a href="contact.html" className="hire-me-button bellow blurred seen">
            <img src="assets/hireme.png" alt="hire-me button" />
          </a> */}
        </div>
        <footer>
          <div>
            Copyright{" "}
            <span>
              <img src="assets/copyright.svg" alt="copyright logo" />
            </span>{" "}
            Jcode. All Rights Reserved 2024
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
