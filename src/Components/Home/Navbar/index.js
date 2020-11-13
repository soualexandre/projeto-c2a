import React from 'react';
import './navbar.css';
import { Container } from '@material-ui/core';
import { Link} from 'react-router-dom';


import Logo from '../../../assets/img/c2a-logo.png'
function Navbar() {
  return (
    <div className="nav-main">
      <Container maxWidth="lg" className="nav-display" position="fixed">
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
             <Link to="/login">
            <button className="nav-button">Área do Cliente</button></Link>
            </div>
            </li>
            </ul>
      </Container>
    </div>

  );
}

export default Navbar;
