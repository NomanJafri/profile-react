import { useState } from "react";
import moon from '../assets/moon-solid.svg';
import sun from '../assets/sun-regular.svg';

// eslint-disable-next-line react/prop-types
export default function Navigation({ toggleTheme }) {
  const [manageDisplay, setManageDisplay] = useState({
    navItemDisplay: window.innerWidth < 721 ? "none" : "flex",
    closeMenuDisplay: "none",
    openMenuDisplay: window.innerWidth < 721 ? "block" : "none",
    classToggle: "",
    theme: "Dark",
  });

  const mql = window.matchMedia("(max-width:720px)");

  mql.onchange = () => {
    setManageDisplay({
      navItemDisplay: window.innerWidth < 721 ? "none" : "flex",
      closeMenuDisplay: "none",
      openMenuDisplay: window.innerWidth < 721 ? "block" : "none",
      classToggle: "",
      theme: manageDisplay.theme,
    });
  };

  const openMenuFunc = (e) => {
    e.preventDefault();
    setManageDisplay({
      navItemDisplay: "flex",
      closeMenuDisplay: "block",
      openMenuDisplay: "none",
      classToggle: "toggle-menu",
      theme: manageDisplay.theme,
    });
  };

  const closeMenuFunc = (e) => {
    e.preventDefault();
    setManageDisplay({
      navItemDisplay: window.innerWidth < 721 ? "none" : "flex",
      closeMenuDisplay: "none",
      openMenuDisplay: window.innerWidth < 721 ? "block" : "none",
      classToggle: "",
      theme: manageDisplay.theme,
    });
  };

  const scrollPositions = {
    heros: window.innerWidth < 721 ? 10 : 20,
    education: window.innerWidth < 721 ? 510 : 550,
    skils: window.innerWidth < 721 ? 1230 : 1310,
    projects: window.innerWidth < 721 ? 1770 : 1830,
    contact: window.innerWidth < 721 ? 3670 : 3770,
  };

  return (
    <section id="navigation">
      <a
        className="navbar-brand"
        href="#heros-section"
        onClick={(e) => {
          e.preventDefault();
          scroll({ top: scrollPositions.heros, behavior: "smooth" });
        }}
      >
        Noman Jafri
      </a>

      <div id="right-nav" className={manageDisplay.classToggle}>
        <button
          id="open-menu"
          style={{ display: manageDisplay.openMenuDisplay }}
          type="button"
          aria-controls="navbarToggle"
          aria-label="Toggle navigation"
          onClick={openMenuFunc}
        >
          ||||
        </button>

        <button
          id="close-menu"
          style={{ display: manageDisplay.closeMenuDisplay }}
          type="button"
          aria-controls="navbarToggle"
          aria-label="Toggle navigation"
          onClick={closeMenuFunc}
        >
          X
        </button>

        <a
          className="nav-item"
          style={{ display: manageDisplay.navItemDisplay }}
          href="#education"
          onClick={(e) => {
            closeMenuFunc(e);
            scroll({ top: scrollPositions.education, behavior: "smooth" });
          }}
        >
          Education
        </a>

        <a
          className="nav-item"
          style={{ display: manageDisplay.navItemDisplay }}
          href="#skills"
          onClick={(e) => {
            closeMenuFunc(e);
            scroll({ top: scrollPositions.skils, behavior: "smooth" });
          }}
        >
          Skills
        </a>

        <a
          className="nav-item"
          style={{ display: manageDisplay.navItemDisplay }}
          href="#projects"
          onClick={(e) => {
            closeMenuFunc(e);
            scroll({ top: scrollPositions.projects, behavior: "smooth" });
          }}
        >
          Projects
        </a>

        <a
          className="nav-item"
          style={{ display: manageDisplay.navItemDisplay }}
          href="#contact"
          onClick={(e) => {
            closeMenuFunc(e);
            scroll({ top: scrollPositions.contact, behavior: "smooth" });
          }}
        >
          Contact
        </a>

        <a
          className="nav-item"
          style={{ display: manageDisplay.navItemDisplay }}
          onClick={(e) => {
            closeMenuFunc(e);
            setManageDisplay((prev) => {
              return {
                ...prev,
                theme: manageDisplay.theme == "Light" ? "Dark" : "Light",
              };
            });
            toggleTheme();
          }}
        >
          {manageDisplay.theme=='Dark' ? <img src={moon} alt="Moon Pic"/>: <img src={sun} alt="Sun Pic" />}
        </a>
      </div>
    </section>
  );
}
