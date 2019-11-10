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
            Building clean and modern web applications
            focused on exceptional user experience.
          </p>
        </div>

        <div className="Home-work">
          <h2>Tech I Use</h2>
          <Stack
            technologies={[
              'Node.js',
              'Express',
              'MySQL',
              'MongoDB',
              'React',
              'D3.js',
              'Nodemailer',
              'Bash',
              'Git',
              'GitHub',
              'GitLab',
              'NGINX',
              'DigitalOcean',
              'AWS',
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
