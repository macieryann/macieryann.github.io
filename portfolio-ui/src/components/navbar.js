import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;