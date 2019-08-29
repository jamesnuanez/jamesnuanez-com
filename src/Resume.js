import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  componentDidMount() {
    document.title = `Resume | ${process.env.REACT_APP_SITE_TITLE}`;
  }
  render() {
    return (
      <section className="Resume">
        <h1>James Nuanez</h1>
        <p>
          <a href="mailto:james@jamesnuanez.com">james@jamesnuanez.com</a>
          {' '}<span className="Resume-divider">|</span>{' '}
          <a href="https://github.com/jamesnuanez">github.com/jamesnuanez</a>
          {' '}<span className="Resume-divider">|</span>{' '}
          <a href="https://www.linkedin.com/in/jamesnuanez">linkedin.com/in/jamesnuanez</a>
        </p>
        <hr />

        <main className="Resume-main">
          <div className="Resume-left">

            <h2>Skills</h2>
            <ul>
              <li>Node.js with Express</li>
              <li>React</li>
              <li>MySQL</li>
              <li>Git / GitHub / GitLab</li>
              <li>Linux CLI / Bash</li>
              <li>AWS</li>
              <li>D3</li>
              <li>MongoDB</li>
              <li>FreeSWITCH</li>
              <li>UI/UX Design</li>
            </ul>

            <h2>Education</h2>

            <h3>Online Courses</h3>
            <ul>
              <li>Wes Bos ES6</li>
              <li>Wes Bos Node</li>
              <li>Colt Steele React Bootcamp</li>
              <li>Colt Steele MySQL Bootcamp</li>
              <li>Colt Steele Web Dev Bootcamp</li>
            </ul>

            <h3>BFA in Illustration</h3>
            <ul>
              <li>California State University,</li>
              <li>Long Beach</li>
              <li>GPA: 3.8, 2007</li>
            </ul>

            <h3>CompTIA Network+</h3>
            <ul>
              <li>Exam N10-006</li>
              <li>July 2017</li>
            </ul>

            <h3>CompTIA A+</h3>
            <ul>
              <li>Exam 220-901 & 220-902</li>
              <li>July 2016</li>
            </ul>

            <h3>SIP School Certified Associate</h3>
            <ul>
              <li>The SIP School</li>
              <li>June 2018</li>
            </ul>

          </div>
          <div className="Resume-right">

            <h2>Experience</h2>
            
            <h3>
              <span className="avoid-wrap">Freelance Full Stack Developer</span>
              {' '}<span className="avoid-wrap">(2017-Present)</span></h3>
            <h4>Portfolio at www.jamesnuanez.com</h4>
            <p>Building full stack, responsive websites using Node.js and Express, with NGINX on Linux, hosted on Digital Ocean. Managed via command line, including system updates and TLS certification management with Let’s Encrypt.</p>

            <h3>
              <span className="avoid-wrap">VoIP Software Developer</span>
              {' '}<span className="avoid-wrap">(Jul 2019 - Present)</span></h3>
            <h4>At Phone.com, a VoIP service provider.</h4>
            <p>With a team, build a new VoIP call routing service on FreeSWITCH. Implement features and bug fixes in Lua, and connect to a MySQL database. Code managed in GitLab.</p>

            <h3>
              <span className="avoid-wrap">VoIP Systems Analyst</span>
              {' '}<span className="avoid-wrap">(Nov 2018 - Jul 2019)</span></h3>
            <h4>At Phone.com, a VoIP service provider.</h4>
            <p>Various projects surrounding VoIP KPIs and monitoring, including building two full stack Node.js applications from scratch:</p>
            <ol>
              <li><em>Call records search tool:</em> built on AWS, including a dedicated VPC, RDS database, call recordings in S3, Lambda Functions to process recordings and collect and reconcile API data, and SNS alerts for error handling.</li>
              <li><em>VoIP Stats tool:</em> collect and display call statistics and alerts, with a local MySQL database, connections to the PagerDuty and Jira APIs, D3 for data visualizations, uptime calculated on-the-fly for any time range, and various Bash scripts for collecting images from other web services.</li>
            </ol>

            <h3>
              <span className="avoid-wrap">Software Quality Assurance Specialist</span>
              {' '}<span className="avoid-wrap">(Feb 2018 - Oct 2018)</span></h3>
            <h4>At Phone.com, a VoIP service provider.</h4>
            <p>Tested in-house applications (Android, iOS, macOS, Windows) and VoIP call routing software. Wrote regression tests, documented bugs, and worked with developers to improve user experience.</p>

            <h3>
              <span className="avoid-wrap">English Teacher in South Korea</span>
              {' '}<span className="avoid-wrap">(2013-2015)</span></h3>
            <h4>At Guhak Elementary School in Busan, South Korea.</h4>
            <p>Taught alongside multiple Korean teachers. Brainstormed and planned lessons in conjunction with the Korean teachers, including normal daily English lessons and multi-week summer camps.</p>

            <h3>
              <span className="avoid-wrap">Web Design and Bug Tracking</span>
              {' '}<span className="avoid-wrap">(2008-2009, 2011-2012)</span></h3>
            <h4>At GreekBill, Inc. and MemberPlanet in Torrance, California.</h4>
            <p>Redesigned existing website to improve UI/UX, performed QA testing and bug tracking, and wrote functional documentation.</p>

          </div>
        </main>
      </section>
    );
  }
}

export default Resume;
