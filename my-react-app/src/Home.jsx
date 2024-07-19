import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Terence</h2>
        <div className="prompt">
          <p>Software Engineer with a passion for learning and creating.</p>

          <a
            href="https://www.linkedin.com/in/terence-tagayona-455884193/"
            target=""
            rel=""
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:terence.tagayona@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/Terence1925" target="" rel="">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, Javascript, ReactJS, NPM, BootStrap, MaterialUI, Yarn,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, PHP, laravel, MySQL, PostgreSQL,</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Node.js, Express.js</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
