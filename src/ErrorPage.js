import React, { Component } from 'react';
import './ErrorPage.css';

class ErrorPage extends Component {
  render() {
    return (
      <section className="ErrorPage">
        <h1>Sorry</h1>
        <p>That page does not exist</p>
      </section>
    );
  }
}

export default ErrorPage;
