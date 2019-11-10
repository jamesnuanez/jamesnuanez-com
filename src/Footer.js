import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>This website was built by James Nuanez using <a className="simple-link" href="http://reactjs.org">React</a> in 2019</p>
        <p>
          <a
            className="button"
            href="https://github.com/jamesnuanez/jamesnuanez-com"
          >
            View code on GitHub
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
