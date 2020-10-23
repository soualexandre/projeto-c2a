import React from 'react';
import './navbar.css';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


import Logo from '../../../assets/img/c2a-logo.png'
function Navbar() {
  return (
    <div className="nav-main">
      <Container maxWidth="lg" className="nav-display">
        <ul className="nav-list">
          <li>
            <a className="nav-logo">
              <img src={Logo} href="#" />
            </a>
          </li>
          <li>
          <div className="nav-items">
            <a className="item">Serviços</a>
              <a className="item">Serviços</a>
              <a className="item">Serviços</a>
              <a className="item">Serviços</a>
            <button className="nav-button">Área do Cliente</button>
            </div>
            </li>
            </ul>
      </Container>
    </div>

  );
}

export default Navbar;
