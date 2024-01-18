// src/components/Header.js

import React, { useState } from 'react';
import '../styles/header.scss';
import Logo from '../Images/favicon2.png';
import UPALogo from '../Images/UPALogo14.png';
import { socialLinks, navigaitionLinks } from '../lib/data';
const Header = () => {
  const [isMobilePanelOpen, setMobilePanelOpen] = useState(false);

  const toggleMobilePanel = () => {
    setMobilePanelOpen(!isMobilePanelOpen);
  };

  return (
    <header
      className={`header${isMobilePanelOpen ? ' mobile-panel-open' : ''}`}>
      <div className="logo">
        {' '}
        <img src={Logo} alt="Africa Health excon" />
      </div>
      <div className="social-links">
        <div>
          <ul
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {socialLinks.map((link, i) => (
              <li key={i}>{link.icon}</li>
            ))}
          </ul>
        </div>

        <div>
          {navigaitionLinks.map((link, i) => (
            <select key={i}>
              <option>{link.name}</option>
            </select>
          ))}
          <button type="button" className="registerButton">
            Register
          </button>
        </div>
      </div>

      <div
        className={`mobile-panel${
          isMobilePanelOpen ? ' mobile-panel-open' : ''
        }`}>
        <button onClick={toggleMobilePanel} className='close-btn'>close</button>
        <div className="social-links">
          <a href="#">Social Link 1</a>
          <a href="#">Social Link 2</a>
          <a href="#">Social Link 3</a>
          {/* Add more social links as needed */}
        </div>
      </div>
      <div className="secondary-logo">
        <img src={UPALogo} alt="Africa Health excon" />
      </div>
      <div className="mobile-toggle" onClick={toggleMobilePanel}>
        ☰
      </div>
    </header>
  );
};

export default Header;
