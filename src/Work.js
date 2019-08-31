import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectPage from './ProjectPage';
import FinalLink from './FinalLink';
import data from './data.json';
import './Work.css';

class Work extends Component {
  componentDidMount() {
    document.title = `Work | ${process.env.REACT_APP_SITE_TITLE}`;
    window.scrollTo(0,0);
  }
  render() {
    const routeMatch = {...this.props.match};
    return (
      <section className="Work">
        <h1>Work</h1>
        <div className="Project-container">
          {data.map((project, i) => (
            <ProjectCard
              history={this.props.history}
              key={project.key}
              imageLocation={i % 2 === 0 ? 'left' : 'right'}
              {...project}
            />
          ))}
        </div>
        <FinalLink url="/about" text="Learn more about me" />

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
