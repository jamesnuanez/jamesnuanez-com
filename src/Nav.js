import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.handleMobileMenuButtonClick = this.handleMobileMenuButtonClick.bind(this);
  }

  handleMobileMenuButtonClick(e) {
    this.props.toggleMobileMenu();
    e.stopPropagation();
  }

  render() {
    return (
      <nav className={`Nav${this.props.isScrolledDown ? ' Nav-shadow' : ''}`}>
        <div className="Nav-container">
          <Link to="/">
            {
              window.location.pathname === '/'
              ? 'Home'
              : 'James Nuanez'
            }
          </Link>
          <button
            className="Nav-mobile-menu-button"
            onClick={this.handleMobileMenuButtonClick}
          >
            {
              this.props.mobileMenuOpen
              ? 'X'
              : '='
            }
          </button>
          <ul
            className={
              this.props.mobileMenuOpen
              ? ''
              : 'Nav-mobile-menu-closed'
            }
          >
            {this.props.navLinks.map(link => (
              link.type === 'text' ? (
                <li key={link.url}>
                  <NavLink
                    activeClassName='Nav-active'
                    to={link.url}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ) : (
                <li key={link.url}>
                  <a href={link.url}>
                    <img
                      src={`/images/icons/${link.filename}`}
                      alt={link.alt}
                    />
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
