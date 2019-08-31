import React, { Component } from 'react';
import './Stack.css';

const stackTech = [
  { name: 'React'       , img: 'react.svg'       },
  { name: 'Node'        , img: 'node.svg'        },
  { name: 'Express'     , img: 'express.jpg'     },
  { name: 'MySQL'       , img: 'mysql.svg'       },
  { name: 'HTML'        , img: 'html.svg'        },
  { name: 'CSS'         , img: 'css.svg'         },
  { name: 'JavaScript'  , img: 'javascript.png'  },
  { name: 'NGINX'       , img: 'nginx.svg'       },
  { name: 'Nodemailer'  , img: 'nodemailer.png'  },
  { name: 'DigitalOcean', img: 'digitalocean.svg'},
  { name: 'D3'          , img: 'd3.svg'          },
  { name: 'FreeSWITCH'  , img: 'freeswitch.jpg'  },
  { name: 'Lua'         , img: 'lua.svg'         },
  { name: 'MongoDB'     , img: 'mongodb.svg'     },
  { name: 'Passport'    , img: 'passport.svg'    },
  { name: 'AWS'         , img: 'aws.svg'         },
  { name: 'Git'         , img: 'git.svg'         },
  { name: 'GitHub'      , img: 'github.svg'      },
  { name: 'GitLab'      , img: 'gitlab.svg'      },
  { name: 'Bash'        , img: 'bash.svg'        },
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
            <img
              className={
                t === 'Passport'
                  ? 'Stack-img Stack-drop-shadow'
                  : 'Stack-img'
              }
              src={`/images/icons/${stackTech.filter(s => s.name === t)[0].img}`}
              alt={stackTech.filter(s => s.name === t[0].name)}
            />
          </div>
        ))}
      </section>
    );
  }
}

export default Stack;
