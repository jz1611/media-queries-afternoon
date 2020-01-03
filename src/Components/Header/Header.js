import React from 'react';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <h2 className="welcome">Welcome To Our Studio!</h2>
        <h1 className="greeting">It's nice to meet you</h1>
        <button className="info-button">Tell Me More</button>
      </div>
    );
  }
}

export default Header;