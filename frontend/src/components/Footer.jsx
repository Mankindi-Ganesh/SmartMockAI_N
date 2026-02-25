import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* LOGO + ABOUT */}
          <div className="footer-col">
            <img src="/logo.png" alt="Career Guru Logo" className="footer-logo" />
            <p className="footer-desc">
              Connecting talent with opportunities across the nation.
              Find jobs, hire talent, and grow your career with Career Guru.
            </p>
          </div>

          {/* SUPPORT */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Hyderabad, Telangana 500029</li>
              <li>careerguru0805@gmail.com</li>
              <li>+91 9912896197</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {isAuthenticated && <li><Link to="/">Home</Link></li>}
              {isAuthenticated && <li><Link to="/jobs">Jobs</Link></li>}
              {isAuthenticated && <li><Link to="/dashboard">Dashboard</Link></li>}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <Link to="/">
                  <FaSquareXTwitter /> Twitter (X)
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaSquareInstagram /> Instagram
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaYoutube /> YouTube
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaLinkedin /> LinkedIn
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>

      <div className="copyright">
        © {new Date().getFullYear()} Career Guru. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;