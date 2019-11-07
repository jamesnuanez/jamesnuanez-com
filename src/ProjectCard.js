import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stack from './Stack';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    return (
      <div className="ProjectCard">
        <Link
          className="ProjectCard-overlay-link"
          to={`/work/${this.props.url}`}
          aria-hidden="true"
        ></Link>
        <div className="ProjectCard-content">
          <div
            className="ProjectCard-image"
            style={{'paddingRight':
              this.props.url === 'voip-stats'
                ? '0'
                : ''
            }}
          >
            <img
              src={`/images/work/thumb-${this.props.url}.jpg`}
              alt={this.props.title}
              style={{'boxShadow':
                this.props.url === 'voip-stats'
                  ? 'none'
                  : ''
              }}
            />
          </div>
          <div
            className={
              `ProjectCard-text ${
                this.props.imageLocation === 'right'
                ? 'ProjectCard-text-left'
                : ''
              }`
            }
          >
            <h2>{this.props.title}</h2>
            <p>{this.props['description-short']}</p>
          </div>
        </div>
        <Stack
          format="small"
          technologies={this.props['stack'] || this.props.stack}
        />
        <div className="ProjectCard-link">
          <Link
            className="button"
            to={`/work/${this.props.url}`}
          >
            More
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
