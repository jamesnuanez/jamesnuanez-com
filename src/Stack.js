import React, { Component } from 'react';
import './Stack.css';

const stackTech = [
  { name: 'React'       , img: 'react.svg'       , url: 'https://reactjs.org'},
  { name: 'Node.js'     , img: 'node.svg'        , url: 'https://nodejs.org'},
  { name: 'Express'     , img: 'express.jpg'     , url: 'https://expressjs.com/'},
  { name: 'MySQL'       , img: 'mysql.svg'       , url: 'https://www.mysql.com/'},
  { name: 'NGINX'       , img: 'nginx.svg'       , url: 'https://nginx.org/'},
  { name: 'Nodemailer'  , img: 'nodemailer.png'  , url: 'https://nodemailer.com/'},
  { name: 'DigitalOcean', img: 'digitalocean.svg', url: 'https://www.digitalocean.com/'},
  { name: 'D3.js'       , img: 'd3.svg'          , url: 'https://d3js.org'},
  { name: 'FreeSWITCH'  , img: 'freeswitch.jpg'  , url: 'https://freeswitch.com/'},
  { name: 'Lua'         , img: 'lua.svg'         , url: 'https://www.lua.org'},
  { name: 'MongoDB'     , img: 'mongodb.svg'     , url: 'https://www.mongodb.com'},
  { name: 'Passport.js' , img: 'passport.svg'    , url: 'http://www.passportjs.org'},
  { name: 'AWS'         , img: 'aws.svg'         , url: 'https://aws.amazon.com'},
  { name: 'Git'         , img: 'git.svg'         , url: 'https://git-scm.com'},
  { name: 'GitHub'      , img: 'github.svg'      , url: 'https://github.com'},
  { name: 'GitLab'      , img: 'gitlab.svg'      , url: 'https://gitlab.com'},
  { name: 'Bash'        , img: 'bash.svg'        , url: 'https://www.gnu.org/software/bash/'},
];

class Stack extends Component {
  render() {
    return (
      <section className="Stack">
        {this.props.technologies
          .filter(t => stackTech.find(tech => tech.name === t))
          .map(t => (
            <div
              key={t}
              className={
                `Stack-img-container ${
                  this.props.format === 'small' && 'Stack-img-container-small'
                }`
              }
            >
              <a
                href={stackTech.filter(s => s.name === t)[0].url}
              >
                <img
                  className={
                    t === 'Passport.js'
                      ? 'Stack-img Stack-drop-shadow'
                      : 'Stack-img'
                  }
                  src={`/images/icons/${stackTech.filter(s => s.name === t)[0].img}`}
                  alt={stackTech.filter(s => s.name === t)[0].name}
                  title={stackTech.filter(s => s.name === t)[0].name}
                />
              </a>
            </div>
          ))}
      </section>
    );
  }
}

export default Stack;
