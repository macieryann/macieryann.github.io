import React from 'react';

function Navbar() {
    const handleScroll = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#about" className="nav-link" onClick={() => handleScroll('intro')}>
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#resume" className="nav-link" onClick={() => handleScroll('resume')}>
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link" onClick={() => handleScroll('projects')}>
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#socials" className="nav-link" onClick={() => handleScroll('socials')}>
                        Socials
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link" onClick={() => handleScroll('contact')}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;