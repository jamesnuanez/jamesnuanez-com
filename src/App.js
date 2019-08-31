import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Work from './Work';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import './App.css';

const navLinks = [
  { type: 'text', url: '/work', name: 'Work' },
  { type: 'text', url: '/about', name: 'About' },
  { type: 'text', url: '/resume', name: 'Resume' },
  { type: 'text', url: '/contact', name: 'Contact' },
  { type: 'img', url: 'https://github.com/jamesnuanez', filename: 'github.svg', alt: 'GitHub' },
  { type: 'img', url: 'https://www.linkedin.com/in/jamesnuanez', filename: 'linkedin.png', alt: 'LinkedIn' },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      isScrolledDown: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      window.scrollY > 1
        ? this.setState({ isScrolledDown: true })
        : this.setState({ isScrolledDown: false })
    })
  }
  render() {
    return (
      <div className="App">
        <Nav navLinks={navLinks} isScrolledDown={this.state.isScrolledDown}/>
        <main className="App-container">
          <Switch>
            <Route exact path='/'        component={Home}    />
            <Route       path='/work'    component={Work}    />
            <Route exact path='/about'   component={About}   />
            <Route exact path='/resume'  component={Resume}  />
            <Route exact path='/contact' component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
