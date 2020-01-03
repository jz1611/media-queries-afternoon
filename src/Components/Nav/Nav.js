import React from 'react';

import './Nav.css';

const menu = require('./hamburger.jpg');

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "menu"
    };
  }

  toggleMenu = () => {
    if (this.state.menuStatus === "menu-closed" || this.state.menuStatus === "menu") {
      this.setState({menuStatus: "menu-open"});
    } else {
      this.setState({menuStatus: "menu-closed"});
    }
  }

  render() {
    return (
      <div>
        <nav>
          <h1 className="company-name">Start Bootstrap</h1>
          <div className="item-bar">
            <h2 className="list-item">Services</h2>
            <h2 className="list-item">Portfolio</h2>
            <h2 className="list-item">About</h2>
            <h2 className="list-item">Team</h2>
            <h2 className="list-item">Contact</h2>
          </div>
          <button
            className="menu-button"
            onClick={this.toggleMenu}
            >
            Menu
            <img
              className="menu-image"
              src={menu}
              alt="menu button"
            />
          </button>
        </nav>
        <menu className={this.state.menuStatus}>
          <div className="menu-container">
            <h2 className="list-item">Services</h2>
            <h2 className="list-item">Portfolio</h2>
            <h2 className="list-item">About</h2>
            <h2 className="list-item">Team</h2>
            <h2 className="list-item">Contact</h2>
          </div>
          <div className="dummy"></div>
        </menu>
      </div>
    );
  }
}

export default Nav;