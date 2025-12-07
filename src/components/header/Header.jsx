import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sakiththiyan Thankavelu</h1>
        <h5 className="text-light">AI Engineer & Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
           {/* Placeholder for a 3D element or profile image if available, 
               otherwise we use a nice gradient orb in CSS */}
           <div className="header__orb"></div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
