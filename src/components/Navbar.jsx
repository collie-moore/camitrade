import React from "react";
import "./nav-foot.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <Link to="/" className="logo">
          <i className=""></i> <span>CAMITRADE</span>
        </Link>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="drop">
            <span>
              SERVICES <i className="fas fa-sort-down icon"></i>
            </span>
            <ul>
              <li>
                <a href="#blog1">Article 1</a>
              </li>
              <li>
                <a href="#blog2">Article 2</a>
              </li>
              <li>
                <a href="https://roberttk1.github.io/My-portfolio/">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog3">Article 3</a>
              </li>
              <li>
                <a href="#blog4">Article 4</a>
              </li>
            </ul>
          </li>
        </ul>
        <Link to="/contact" className="contact">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}
