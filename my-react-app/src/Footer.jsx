import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/terence-tagayona-455884193/"
          target=""
          rel=""
          aria-label="LinkedIn Profile"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.facebook.com/terencetagayona/"
          target=""
          rel=""
          aria-label="Facebook Profile"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/dahonhealthway/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <Instagram />
        </a>
      </div>

      <div className="footerContent">
        <a
          href="/src/CV_Terence_OnlineJobs.pdf" // Replace with the path to your resume file
          download
          className="resumeButton"
        >
          Download my Resume
        </a>
        <p>&copy; {currentYear} Terence E. Tagayona</p>
      </div>
    </div>
  );
};

export default Footer;
