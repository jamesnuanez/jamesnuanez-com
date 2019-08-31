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

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>

          <div className="Contact-checkbox-container">
            <input
              type="checkbox"
              id="receiveCopy"
              name="receiveCopy"
              checked={this.state.receiveCopy}
              onChange={this.handleChangeCheckbox}
            />
            <label htmlFor="receiveCopy">Receive a copy</label>
          </div>

          <button className="button button-large">Send</button>
        </form>

        {this.state.responseMessage && <p>{this.state.responseMessage}</p>}

      </section>
    );
  }
}

export default Contact;
