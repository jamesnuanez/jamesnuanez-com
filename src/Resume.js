import React, { Component } from 'react';
import FinalLink from './FinalLink';
import './Resume.css';

class Resume extends Component {
  componentDidMount() {
    document.title = `Resume | ${process.env.REACT_APP_SITE_TITLE}`;
    window.scrollTo(0,0);
  }
  render() {
    return (
      <section className="Resume">
        <div className="Resume-page">
          <h1>James Nuanez</h1>
          <p className="Resume-links">
            <a
              className="text-link"
              href="mailto:james@jamesnuanez.com"
            >james@jamesnuanez.com</a>

            {' '}<span className="Resume-divider">|</span>{' '}

            <a
              className="text-link"
              href="https://github.com/jamesnuanez"
            >github.com/jamesnuanez</a>

            {' '}<span className="Resume-divider">|</span>{' '}

            <a
              className="text-link"
              href="https://www.linkedin.com/in/jamesnuanez"
            >linkedin.com/in/jamesnuanez</a>
          </p>
          <hr />

          <div className="Resume-content">
            <h2>Full Stack Web Development</h2>
            <p>
              Personal projects and client work run on Debian Linux with NGINX, hosted on Digital Ocean. They are updated using Git Hooks or by pulling from GitHub, and are managed via the command line, including TLS certification management with Let’s Encrypt.
            </p>
            <h3>
              <span className="avoid-wrap">Cash Tracker (personal project)</span>
              {' '}<span className="avoid-wrap"> -- 2019</span>
            </h3>
            <h4>cash.jamesnuanez.com</h4>
            <p>
              Multi-user cash management software. Each user can add and edit transactions and transfer amounts to other users. Review transactions and reconcile balances of individuals or the entire group. Includes user authentication for multiple users on the same account. Responsive design.
            </p>
            <h4>Node.js, Express, MySQL</h4>

            <h3>
              <span className="avoid-wrap">Author Website: J. M. M. Nuanez</span>
              {' '}<span className="avoid-wrap">(client work)</span>
              {' '}<span className="avoid-wrap"> -- 2019</span>
            </h3>
            <h4>www.jmmnuanez.com</h4>
            <p>
              Responsive website with custom newsletter and contact forms that save to a local database, connect to the MailChimp API, send custom-designed emails to the author and optionally to the site visitor, allow newsletter subscription modification, and include spam filtering. Makes use of the JavaScript history API.
            </p>
            <h4>Node.js, Express, MySQL, MailChimp API</h4>

            <h3>
              <span className="avoid-wrap">Node.js MongoDB Starter App (personal project)</span>
              {' '}<span className="avoid-wrap"> -- 2019</span>
            </h3>
            <h4>starter.jamesnuanez.com</h4>
            <p>
              Starter application built with Node.js, Express, MongoDB, Mongoose, Passport.js, and Nodemailer. User management includes account creation, user authentication, password reset, verification emails, email and password change, user invitation, and account deletion.

            </p>
            <h4>Node.js, Express, MongoDB, code on GitHub</h4>

            <h3>
              <span className="avoid-wrap">Call Search Tool</span>
              {' '}<span className="avoid-wrap">(employed work)</span>
              {' '}<span className="avoid-wrap"> -- 2019</span>
            </h3>
            <h4>For Phone.com</h4>
            <p>
              Internal application for customer support management to browse, filter, and search for customer support calls. Serverless Lambda functions collect call details from an external SOAP API and reconcile it to call recordings stored in S3. Encompasses an entire AWS application infrastructure, including a dedicated VPC with public and private subnets, an internet gateway, NAT gateway, S3 endpoint, MySQL RDS Database, EC2 instance, and SNS alerts for error handling.
            </p>
            <h4>Node.js, Express, MySQL, Amazon Web Services</h4>

            <h3>
              <span className="avoid-wrap">VoIP Stats Tool</span>
              {' '}<span className="avoid-wrap">(employed work)</span>
              {' '}<span className="avoid-wrap"> -- 2018</span>
            </h3>
            <h4>For Phone.com</h4>
            <p>
              Automatically collects VoIP and system statistics from various services using Bash scripts and by hitting APIs and saving the data to a local database. Stats are accessible by date or date range, pie and bar chart visualizations built using D3.js, uptime calculated on-the-fly for any time range, hosted on an EC2 instance in AWS.
            </p>
            <h4>Node.js, Express, MySQL, Bash Scripting, D3.js, PagerDuty API, Jira API</h4>

            <h3>
              <span className="avoid-wrap">Local business: Sweet Via Patisserie</span>
              {' '}<span className="avoid-wrap">(client work)</span>
              {' '}<span className="avoid-wrap"> -- 2017</span>
            </h3>
            <h4>www.sweetviapatisserie.com</h4>
            <p>
              Responsive website that connects to the Instagram API to display recent images and includes custom contact forms for customers to ask questions or place orders. Forms include spam filtering and messages are emailed to the business owner.
            </p>
            <h4>Node.js, Express, Instagram API</h4>

            <h2>Other Experience</h2>
            <h3>
              <span className="avoid-wrap">VoIP Software Developer</span>
              {' '}<span className="avoid-wrap">(Nov 2018 - Present)</span>
            </h3>
            <h4>At Phone.com in Poway, California</h4>
            <p>
              Built the web applications listed above. On a team, built and deployed a new VoIP call routing service on FreeSWITCH, running on Debian. Implemented features and bug fixes in Lua, with code managed in GitLab. Also wrote some Jira customizations using Groovy.
            </p>

            <h3>
              <span className="avoid-wrap">Software Quality Assurance Specialist</span>
              {' '}<span className="avoid-wrap">(Feb 2018 - Oct 2018)</span>
            </h3>
            <h4>At Phone.com in Poway, California</h4>
            <p>
              Tested in-house applications (Android, iOS, macOS, Windows) and VoIP call routing software. Wrote regression tests, documented bugs, and worked with developers to improve user experience. Accessed code in Android Studio and Xcode to assist in bug tracking. Wrote some XML changes in the Android application and some HTML that was used in the macOS application.
            </p>

            <h3>
              <span className="avoid-wrap">Web Design and Bug Tracking</span>
              {' '}<span className="avoid-wrap">(2008-2009, 2011-2012)</span>
            </h3>
            <h4>At GreekBill, Inc. and MemberPlanet in Torrance, California</h4>
            <p>
              Redesigned existing website to improve UI/UX, performed QA testing and bug tracking, and wrote functional documentation.
            </p>

            <h2>Education</h2>
            <ul>
              <li>
                <strong>Wes Bos (online courses): </strong>
                ES6, Node.js
              </li>
              <li>
                <strong>Colt Steele (online courses): </strong>
                React, MySQL, Web Developer Bootcamp
              </li>
              <li>
                <strong>CompTIA Network+ </strong>
                (July 2017)
              </li>
              <li>
                <strong>CompTIA A+ </strong>
                (July 2016)
              </li>
              <li>
                <strong>SIP School Certified Associate </strong>
                (June 2018)
              </li>
              <li>
                <strong>BFA in Illustration </strong>
                from CSU Long Beach (GPA: 3.8, 2007)
              </li>
            </ul>

          </div>
        </div>
        <FinalLink url="/contact" text="Get in touch" />
      </section>
    );
  }
}

export default Resume;
