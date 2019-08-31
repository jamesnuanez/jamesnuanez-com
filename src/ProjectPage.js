import React, { Component } from 'react';
import Stack from './Stack';
import './ProjectPage.css';

class ProjectPage extends Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.dontCloseModal = this.dontCloseModal.bind(this);
    this.closeOnEscape = this.closeOnEscape.bind(this);
  }

  closeModal() {
    this.props.history.push('/work');
  }

  dontCloseModal(event) {
    event.stopPropagation();
  }

  closeOnEscape(event) {
    (event.key === 'Escape' || event.key === 'Esc') && this.closeModal();
  };

  componentDidMount() {
    document.title = `${this.props.title} | ${process.env.REACT_APP_SITE_TITLE}`;
    document.body.style.overflow = "hidden";
    window.addEventListener('keyup', this.closeOnEscape);
  }

  componentWillUnmount() {
    document.title = `Work | ${process.env.REACT_APP_SITE_TITLE}`;
    document.body.style.overflow = "auto";
    window.removeEventListener('keyup', this.closeOnEscape);
  }

  render() {
    return (
      <section className="ProjectPage" onClick={this.closeModal}>
        <div className="ProjectPage-modal" onClick={this.dontCloseModal}>
          <button className="ProjectPage-close-button" onClick={this.closeModal}>
            X
          </button>

          {/*--------------------------------------*/}
          {/* TITLE */}
          {/*--------------------------------------*/}
          <h2>{this.props.title}</h2>
          <h3>{this.props.tagline}</h3>

          {/*--------------------------------------*/}
          {/* VIDEO */}
          {/*--------------------------------------*/}
          {
            this.props.video !== 'none' &&
            <video controls
              poster={this.props.image || '/images/temp-video.jpg'}
              src={this.props.video}
            />
          }

          {/*--------------------------------------*/}
          {/* STACK */}
          {/*--------------------------------------*/}
          <Stack technologies={this.props.stack} />

          {/*--------------------------------------*/}
          {/* DESCRIPTION */}
          {/*--------------------------------------*/}
          <p>{this.props['description-long'] || this.props['description-short']}</p>

          {/*--------------------------------------*/}
          {/* FEATURES */}
          {/*--------------------------------------*/}
          {
            this.props.features
            &&
            <React.Fragment>
              <h2>Features</h2>
              <ul>
                {this.props.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </React.Fragment>
          }

          {/*--------------------------------------*/}
          {/* GITHUB LINK */}
          {/*--------------------------------------*/}
          {
            this.props['link-github']
            &&
            <a className="button" href={this.props['link-github']}>View code on GitHub</a>
          }

          {/*--------------------------------------*/}
          {/* WEBSITE LINK */}
          {/*--------------------------------------*/}
          {
            this.props['link-website']
            &&
            <a className="button" href={this.props['link-website']}>View Website</a>
          }
        </div>
      </section>
    );
  }
}

export default ProjectPage;
