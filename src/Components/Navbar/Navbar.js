import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
        <nav
          className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div className="container">
          
            <img
              src="https://iconape.com/wp-content/png_logo_vector/android-logomark.png"
              alt="logo"
              style={{ maxWidth: "50px" }}
            />

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
            
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll" href="">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="">
                  Documentation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
