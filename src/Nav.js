import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className={`Nav${this.props.isScrolledDown ? ' Nav-shadow' : ''}`}>
        <div className="Nav-container">
          <Link to="/">Home</Link>
          <ul>
            {this.props.navLinks.map(link => (
              <li key={link.url}>
                <NavLink
                  activeClassName='Nav-active'
                  to={link.url}>{link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
