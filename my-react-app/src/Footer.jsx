import React from "react";
import "./components/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerContent">
        <a href="/CV_TerenceTagayona.pdf" download className="resumeButton">
          Download my Resume
        </a>
        <p>&copy; {currentYear} Terence E. Tagayona</p>
      </div>
    </div>
  );
};

export default Footer;
