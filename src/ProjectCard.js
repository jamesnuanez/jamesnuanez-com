import React, { Component } from 'react';
import Stack from './Stack';
import './ProjectCard.css';

class ProjectCard extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/work/${this.props.url}`);
  }
  
  render() {
    return (
      <div className="ProjectCard" onClick={this.handleClick}>
        <h2>{this.props["title-short"] || this.props.title}</h2>
        <Stack
          format="small"
          technologies={this.props['stack-primary'] || this.props.stack}
        />
      </div>
    );
  }
}

export default ProjectCard;
