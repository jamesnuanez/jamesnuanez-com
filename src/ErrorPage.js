import React, { Component } from 'react';
import './ErrorPage.css';

class ErrorPage extends Component {
  componentDidMount() {
    document.title =`Error | ${process.env.REACT_APP_SITE_TITLE}`;
    window.scrollTo(0,0);
  }
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
