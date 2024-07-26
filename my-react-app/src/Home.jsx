import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import myPhoto from "./assets/photo_of_me.png"; // Ensure this path is correct
import "./components/home.css";
import usePageTitle from "./hooks/usePageTitle";

function Home() {
  usePageTitle("Terence");
  return (
    <div className="home">
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="about">
        <div className="text-section">
          <h2 className="subtitle">
            Hi, My Name is <span className="title">Terence!</span>
          </h2>
          <div className="prompt">
            <p>
              <span className="main">Software Engineer</span> with a passion for
              learning and creating.
            </p>
            <a
              href="https://www.linkedin.com/in/terence-tagayona-455884193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="mailto:terence.tagayona@gmail.com">
              <EmailIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/Terence1925"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="myphoto">
          <img src={myPhoto} alt="Terence Tagayona" />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <br />
            <div className="icon-container">
              <i className="fab fa-html5" title="HTML"></i>
              <i className="fab fa-css3-alt" title="CSS"></i>
              <i className="fab fa-js" title="JavaScript"></i>
              <i className="fab fa-react" title="ReactJS"></i>
              <i className="fab fa-npm" title="NPM"></i>
              <i className="fab fa-bootstrap" title="Bootstrap"></i>
              {/* <i className="fab fa-sass" title="MaterialUI"></i> */}
              {/* <i className="fab fa-yarn" title="Yarn"></i> */}
              <i
                className="fab fa-styled-components"
                title="Styled Components"
              ></i>
            </div>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <br />
            <div className="icon-container">
              <i className="fab fa-node" title="NodeJS"></i>
              <i className="fas fa-server" title="ExpressJS"></i>
              <i className="fab fa-php" title="PHP"></i>
              <i className="fab fa-laravel" title="Laravel"></i>
              <h1>C++</h1>
              {/* Uncomment the MySQL icon if needed */}
              {/* <i className="fas fa-database" title="MySQL"></i> */}
              <i className="fas fa-database" title="PostgreSQL"></i>
            </div>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <div className="icon-container">
              <i className="fab fa-js" title="JavaScript"></i>
              <i className="fab fa-node" title="Node.js"></i>
              <i className="fas fa-server" title="Express.js"></i>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
