import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>This website was built by James Nuanez using React in 2019</p>
        <p>
          <a
            class="button"
            href="https://github.com/jamesnuanez/jamesnuanez-com-frontend"
          >
            View code on GitHub
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
