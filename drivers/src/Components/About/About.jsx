// import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to="/" className={style.contactButtons}>
          Back to Landing
        </Link>
      </div>

      <button className={style.about}>About Me</button>
      <p className={style.parr}>
        ¡Hola! Soy Ramiro Heredia, el desarrollador de este sitio. En los
        siguientes enlaces puedes contactarme o encontrar información sobre mí y
        mis proyectos.
      </p>
      <footer>
        <button className={style.about}>Contacto</button>
        <ul>
          <li>
            <a
              className={style.contactButtons}
              href="https://github.com/Gugol-Ram"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              className={style.contactButtons}
              href="mailto:ramiro.heredia@mi.unc.edu.ar"
            >
              Gmail
            </a>
          </li>

          <li>
            <a
              className={style.contactButtons}
              href="https://www.linkedin.com/in/ramiro-heredia-33b398266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              className={style.contactButtons}
              href="https://www.instagram.com/ramiro.rnfnr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default About;
