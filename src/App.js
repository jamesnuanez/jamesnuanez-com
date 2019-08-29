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
  { url: '/work', name: 'Work' },
  { url: '/about', name: 'About' },
  { url: '/resume', name: 'Resume' },
  { url: '/contact', name: 'Contact' },
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
