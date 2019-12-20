import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      receiveCopy: false,
      responseMessage: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }

  componentDidMount() {
    document.title = `Contact | ${process.env.REACT_APP_SITE_TITLE}`;
    window.scrollTo(0,0);
  }

  async handleSubmit(evt) {
    try {
      evt.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/contact`,
        this.state
      );
      this.setState({ responseMessage: response.data });
    } catch(err) {
      this.setState({ responseMessage: "Something went wrong. Please try again." });
      console.error(err);
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleChangeCheckbox(evt) {
    this.setState(st => ({ receiveCopy: !st.receiveCopy }));
  }

  render() {
    return (
      <section className="Contact">

        <h1>Contact</h1>
        <h2>Let's build something!</h2>

        <p style={{ maxWidth: '30rem', margin: 'auto', fontSize: '1.3rem' }}>
          I am currently accepting contract and consulting work for front
          end, back end, and full stack web applications,
          specializing in Node and React.
        </p>

        <p>
          <a
            className="button"
            href="mailto:james@jamesnuanez.com"
          >
            james@jamesnuanez.com
          </a>
        </p>

        <p className="Contact-social">
          <a href="https://github.com/jamesnuanez">
            <img
              src="/images/icons/github.svg"
              alt="GitHub"
            />
          </a>
          <a
            className="button"
            href="https://github.com/jamesnuanez"
          >
            GitHub
          </a>
        </p>

        <p className="Contact-social">
          <a href="https://www.linkedin.com/in/jamesnuanez">
            <img
              src="/images/icons/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/jamesnuanez"
          >
            LinkedIn
          </a>
        </p>

      </section>
    );
  }
}

export default Contact;
