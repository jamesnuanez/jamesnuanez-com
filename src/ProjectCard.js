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
        <div className="ProjectCard-image">
            <img
              src={`/images/work/thumb-${this.props.url}.jpg`}
              alt={this.props.title}
            />
        </div>
        <div className={
          `ProjectCard-text ${
            this.props.imageLocation === 'right'
            && 'ProjectCard-text-left'
          }`
        }
        >
          <h2>
            {this.props.title}
          </h2>
          <p>
            {this.props['description-short']}
          </p>
          <Stack
            format="small"
            technologies={this.props['stack-primary'] || this.props.stack}
          />
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
