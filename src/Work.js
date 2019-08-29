import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectPage from './ProjectPage';
import data from './data.json';
import './Work.css';

class Work extends Component {
  componentDidMount() {
    document.title = `Work | ${process.env.REACT_APP_SITE_TITLE}`;
  }
  render() {
    const routeMatch = {...this.props.match};
    return (
      <section className="Work">
        <h1>Work</h1>
        <div className="Project-container">
          {data.map(project => (
            <ProjectCard
              history={this.props.history}
              key={project.key}
              {...project}
            />
          ))}
        </div>

          <Route
            exact
            path={`${routeMatch.path}/:project`}
            render={routeParams => {
              const projectData = data.filter(p => (
                p.url === routeParams.match.params.project
              ));
              if (projectData.length < 1) return <Redirect to="/error" />;
              return <ProjectPage {...projectData[0]} {...routeParams} />;
            }}
          />

      </section>
    );
  }
}

export default Work;
