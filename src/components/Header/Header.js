import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__container">
            <div className="header__logo">
                I'm the logo
            </div>
            <div className="header__text">
                I'm the text
            </div>
        </div>
      </header>
    );
  }
}

export default Header;
