import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h2 className="logo me-auto me-lg-0">
          <a href="/">Glint <span>Maldives</span></a>
        </h2>
        <a href="/" className="logo me-auto me-lg-0">
          <img src="/assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#about" className="get-started-btn scrollto">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
