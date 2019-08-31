import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FinalLink.css';

class FinalLink extends Component {
  static defaultProps = {
    url: '/work',
    text: 'View my work'
  }
  render() {
    return (
      <div className="FinalLink">
        <Link
          className="button"
          to={`${this.props.url}`}
        >
          {this.props.text}
        </Link>
      </div>
    );
  }
}

export default FinalLink;
