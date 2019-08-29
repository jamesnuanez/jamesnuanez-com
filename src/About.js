import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
  
  componentDidMount() {
    document.title = `About | ${process.env.REACT_APP_SITE_TITLE}`;
  }

  render() {
    return (
      <section className="About">
        <h1>About</h1>
        <img src="/images/about-james-nuanez.jpg" alt="About James Nuanez"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis dolor. 
          Maecenas arcu est, posuere sed tincidunt quis, pretium at mi. Donec feugiat, diam 
          nec luctus ultrices, elit arcu ultricies neque, sit amet cursus nibh lorem at 
          ligula. Nulla rutrum.
        </p>
        <p>
          Sed semper facilisis mauris accumsan blandit. Pellentesque malesuada vulputate 
          enim, eu venenatis lacus fringilla sed. Integer dignissim ac dolor ut cursus. 
          Suspendisse ac purus porttitor, feugiat quam elementum, congue felis. Donec 
          dignissim, arcu non maximus maximus, mi quam lacinia nisl, et mattis odio orci ut 
          lectus. Mauris quis facilisis sapien. Vestibulum eu venenatis mauris. Cras 
          tristique suscipit consectetur. Vestibulum venenatis ut magna vitae dictum.
        </p>
        <p>
          In facilisis sem diam, a sagittis leo aliquam non. Nunc imperdiet sagittis 
          dictum. Nulla facilisi. In hac habitasse platea dictumst. Duis ac massa id ipsum 
          finibus pharetra. Mauris gravida at sapien vel ultrices. Nullam placerat magna 
          consequat rutrum mattis. Donec interdum gravida augue ut tempor. Nullam 
          fermentum, diam luctus vehicula iaculis, nibh enim efficitur ligula, eget 
          sollicitudin urna mauris a urna. Fusce ultricies elit risus, eu aliquam massa 
          molestie eu. Cras quis lobortis eros. Aliquam et accumsan turpis. Sed cursus, 
          magna non ultrices porttitor, nisi nibh imperdiet ligula, a pharetra augue eros a 
          nulla. Aliquam sed mattis lorem. Donec fringilla posuere ante, id lobortis ante 
          interdum nec.
        </p>
        <p>
          Sed fermentum sapien sed nisi ornare, nec molestie enim semper. Phasellus ligula 
          elit, accumsan in risus nec, posuere dictum felis. Aliquam consectetur quam elit, 
          vitae scelerisque arcu porttitor sit amet. Donec in nunc non leo auctor ornare. 
          Ut id eleifend justo. Pellentesque leo sem, aliquam eget eros non, lobortis 
          tristique ex. Cras venenatis quam at sem iaculis auctor. Quisque eget elit at 
          nisl condimentum tristique. Vestibulum eget egestas tortor. Suspendisse eu mauris 
          accumsan, viverra nulla et.
        </p>
        <Link className="button" to="/work">
          View my work
        </Link>
      </section>
    );
  }
}

export default About;
