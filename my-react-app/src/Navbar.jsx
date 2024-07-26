import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./components/navbar.css";
import Logo from "./images/TTagayona.png";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon style={{ color: "white" }} />
        </button>
      </div>
      <a href="/" className="logo-link">
        <img className="logo" src={Logo} alt="logo" />
      </a>

      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="projects">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
