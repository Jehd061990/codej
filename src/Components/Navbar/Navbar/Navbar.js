import React, { useEffect, useState, useContext, useRef } from "react";
import "./navbar.css";
import ThemeContext from "../../Theme/Theme";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const { aboutNav, setAboutNav, workNav } = useContext(ThemeContext);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const navRef = useRef(null);
  const navBgRef = useRef(null);
  const navBrandRef = useRef(null);
  const expandNavBtnRef = useRef(null);
  const expandNavTopBarRef = useRef(null);
  const expandNavTopBarSpanRef = useRef(null);
  const expandNavMidBarRef = useRef(null);
  const expandNavBotBarRef = useRef(null);
  const expandNavBotBarSpanRef = useRef(null);
  const navUlRef = useRef(null);

  const enableScroll = () => {
    if (navRef.current && navBgRef.current && navUlRef.current) {
      const navScrolled = navRef.current;
      const navBg = navBgRef.current;
      const ulAbout = navUlRef.current.querySelectorAll(
        ".about-page nav ul li .tab"
      );

      if (window.pageYOffset > 0) {
        navScrolled.classList.add("scrolled-down");
        navScrolled.classList.remove("scrolled-up");
        navBg.classList.add("scrolled-down");
        navBg.classList.remove("scrolled-up");
        ulAbout.forEach((tab) => {
          tab.style.color = "white";
        });

        setAboutNav(false);
      } else {
        navScrolled.classList.remove("scrolled-down");
        navScrolled.classList.add("scrolled-up");
        navBg.classList.remove("scrolled-down");
        navBg.classList.add("scrolled-up");

        ulAbout.forEach((tab) => {
          tab.style.color = "black";
        });
        setAboutNav(true);
      }
    }
  };

  useEffect(() => {
    window.onscroll = enableScroll;

    return () => {
      window.onscroll = null;
    };
  }, [enableScroll]);

  const navBtn = () => {
    if (
      navRef.current &&
      navBgRef.current &&
      navBrandRef.current &&
      expandNavBtnRef.current &&
      expandNavTopBarRef.current &&
      expandNavTopBarSpanRef.current &&
      expandNavMidBarRef.current &&
      expandNavBotBarRef.current &&
      expandNavBotBarSpanRef.current &&
      navUlRef.current
    ) {
      const navScrolled = navRef.current;
      const navBg = navBgRef.current;
      const navBrand = navBrandRef.current;
      const expandNavBtn = expandNavBtnRef.current;
      const expandNavTopBar = expandNavTopBarRef.current;
      const expandNavTopBarSpan = expandNavTopBarSpanRef.current;
      const expandNavMidBar = expandNavMidBarRef.current;
      const expandNavBotBar = expandNavBotBarRef.current;
      const expandNavBotBarSpan = expandNavBotBarSpanRef.current;
      const navUl = navUlRef.current;

      navScrolled.classList.toggle("clicked");
      navBg.classList.toggle("clicked");
      navBrand.classList.toggle("clicked");

      if (scrollDisabled) {
        window.onscroll = enableScroll;
        expandNavTopBar.classList.remove("active");
        expandNavTopBarSpan.classList.remove("active");
        expandNavMidBar.classList.remove("active");
        expandNavBotBar.classList.remove("active");
        expandNavBotBarSpan.classList.remove("active");

        expandNavBtn.classList.remove("active");
        expandNavTopBarSpan.classList.add("deactive");
        expandNavMidBar.classList.add("deactive");
        expandNavBotBar.classList.add("deactive");
        expandNavBotBarSpan.classList.add("deactive");

        navUl.querySelectorAll(".about-page nav ul li .tab").forEach((tab) => {
          tab.classList.remove("white");
        });
      } else {
        window.onscroll = null;
        navUl.querySelectorAll(".about-page nav ul li .tab").forEach((tab) => {
          tab.classList.add("white");
        });

        expandNavTopBarSpan.classList.remove("deactive");
        expandNavMidBar.classList.remove("deactive");
        expandNavBotBar.classList.remove("deactive");
        expandNavBotBarSpan.classList.remove("deactive");

        expandNavBtn.classList.add("active");
        expandNavTopBar.classList.add("active");
        expandNavTopBarSpan.classList.add("active");
        expandNavMidBar.classList.add("active");
        expandNavBotBar.classList.add("active");
        expandNavBotBarSpan.classList.add("active");
      }

      setScrollDisabled(!scrollDisabled);

      if (navScrolled.classList.contains("scrolled-down")) {
        navScrolled.classList.remove("scrolled-down");
      } else {
        navScrolled.classList.remove("scrolled-up");
      }

      if (navUl.classList.contains("drop")) {
        navUl.classList.remove("drop");
        navUl.classList.add("lift");

        navBg.classList.remove("scrolled-down");
        navBg.classList.add("scrolled-up");
      } else {
        navUl.classList.add("drop");
        navUl.classList.remove("lift");
        navBg.classList.add("scrolled-down");
        navBg.classList.remove("scrolled-up");
      }
    }
  };

  return (
    <>
      <nav ref={navRef} className="section invisible">
        <div id="nav-bg" ref={navBgRef}></div>
        <div className="brand" ref={navBrandRef}>
          <Link to="/">
            <img src="assets/code-j.png" alt="code-j logo" />
          </Link>
        </div>
        <ul className="desktop-nav" ref={navUlRef}>
          <li>
            <Link
              to="/"
              className={
                workNav ? "tab work-page" : aboutNav ? "tab about-page" : "tab"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                workNav ? "tab work-page" : aboutNav ? "tab about-page" : "tab"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={
                workNav ? "tab work-page" : aboutNav ? "tab about-page" : "tab"
              }
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                workNav
                  ? "action work-page"
                  : aboutNav
                  ? "action about-page"
                  : "action"
              }
            >
              Hire me
            </Link>
          </li>
        </ul>

        <ul className="mobile-nav" ref={navUlRef}>
          <li>
            <Link
              to="/"
              className={
                workNav ? "tab work-page" : aboutNav ? "tab about-page" : "tab"
              }
              onClick={navBtn}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                workNav ? "tab work-page" : aboutNav ? "tab about-page" : "tab"
              }
              onClick={navBtn}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={
                workNav ? "tab work-page" : aboutNav ? "tab about-page" : "tab"
              }
              onClick={navBtn}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                workNav
                  ? "action work-page"
                  : aboutNav
                  ? "action about-page"
                  : "action"
              }
              onClick={navBtn}
            >
              Hire me
            </Link>
          </li>
        </ul>
        <button
          className="nav-btn"
          onClick={navBtn}
          id="toggleNav"
          ref={expandNavBtnRef}
        >
          <div className="top" ref={expandNavTopBarRef}>
            <span ref={expandNavTopBarSpanRef}></span>
          </div>
          <div className="mid" ref={expandNavMidBarRef}></div>
          <div className="bot" ref={expandNavBotBarRef}>
            <span ref={expandNavBotBarSpanRef}></span>
          </div>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
