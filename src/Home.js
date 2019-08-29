import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stack from './Stack';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    document.title = process.env.REACT_APP_SITE_TITLE;
  }
  render() {
    return (
      <section className="Home">
      
        <div className="Home-bio">
          <div>
            <h1>James Nuanez</h1>
            <h2>Full Stack Developer</h2>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
            </p>
            <Link className="button" to="/about">
              Learn more about me
            </Link>
          </div>
          <div>
            <img src="/images/kb-trackball-square.jpg" alt="James Nuanez" />
          </div>
        </div>

        <div className="Home-splash">
          <div className="Home-splash-video">
            <img
              src="/images/jamesnuanez-video.jpg"
              alt="Video of how jamesnuanez.com is built"
            />
          </div>
          <div className="Home-splash-stack">
            <Stack
              title="My current stack"
              technologies={['React', 'Node', 'Express', 'MySQL']}
            />
            <div>
              <a className="button" href="https://github.com/jamesnuanez/jamesnuanez">
                View code on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="Home-work">
          <Stack
            title="Some stuff I've worked with"
            technologies={[
              'Node',
              'Express',
              'React',
              'MySQL',
              'MongoDB',
              'Nodemailer',
              'Passport',
              'D3',
              'Bash',
              'GitHub',
              'GitLab',
              'NGINX',
              'AWS',
              'DigitalOcean',
              'FreeSWITCH',
              'Lua',
            ]}
          />
          <Link className="button" to="/work">View my work</Link>
        </div>
      </section>
    );
  }
}

export default Home;
