import React, { Component } from 'react';
import FinalLink from './FinalLink';
import Stack from './Stack';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    document.title = process.env.REACT_APP_SITE_TITLE;
    window.scrollTo(0,0);
  }
  render() {
    return (
      <section className="Home">
      
        <div className="Home-bio">
          <h1>James Nuanez</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
          </p>
        </div>

        <div className="Home-work">
          <h2>Some other stuff I've worked with</h2>
          <Stack
            technologies={[
              'Bash',
              'Git',
              'GitLab',
              'D3',
              'MongoDB',
              'Nodemailer',
              'Passport',
              'NGINX',
              'AWS',
              'DigitalOcean',
              'FreeSWITCH',
              'Lua',
            ]}
          />
          <FinalLink />
        </div>
      </section>
    );
  }
}

export default Home;
