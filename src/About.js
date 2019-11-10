import React, { Component } from 'react';
import FinalLink from './FinalLink';
import './About.css';

class About extends Component {
  
  componentDidMount() {
    document.title = `About | ${process.env.REACT_APP_SITE_TITLE}`;
    window.scrollTo(0,0);
  }

  render() {
    return (
      <section className="About">
        <h1>About</h1>
        <img src="/images/about-james-nuanez.jpg" alt="About James Nuanez"/>
        <p>
          I built my first website in 2007, and a year later I was working in web design. I enjoyed wrapping my head around and rethinking an application from the ground up, but the design portion wasn’t quite right for me so after a year I moved on to pursue different routes in life. Along the way I made some websites and did some WordPress theme modification, but it wasn’t until 2017 that I took an online course in full stack web development and realized what I was truly built for.
        </p>
        <p>
          In January 2018 I tried to quit my job to attend a coding bootcamp, but my employer didn’t want to let me go so they offered me a job doing quality assurance with the VoIP engineering and mobile application teams. After eight months of breaking things, I was promoted to VoIP software developer, where I built two full stack web applications, wrote a ton of Bash scripts for automation, wrote some code in Lua for the VoIP feature server, and spent many many hours at the Linux command line traversing servers and managing code.
        </p>
        <p>
          I’m now focusing on full stack web development, and the latest tool I’ve added to my belt is React, which I am a big fan of, as it converts the front end from just writing markup documents to truly building an application.
        </p>
        <p>
          I have a strong drive for excellence, and since I’m building things for humans my focus is squarely on user experience. For me, this is about application performance and effortless navigation. The best way to lose someone is making them wait for the application to respond, and the visual language of computer navigation has been refined to the point that interaction should always be effortless. I achieve the performance I desire by making things as lightweight and streamlined as possible, and I build for UX the same way I build for structurally stability: diligent planning, focused effort, iteration, and beating the crap out of it until it’s strong enough to handle anything I can hit it with.
        </p>
        <p>
          Full stack development is an endlessly extensible and ever shifting intersection between mathematical logic and visual communication, and this is what keeps me so enthralled. I’ve taught myself with a plethora of online courses, Stack Overflow posts, YouTube videos, pages and pages of documentation, and anything else that DuckDuckGo, StartPage, and Google will throw back at me when I ask. It’s a constant learning experience, one which I thrive off of and eagerly pursue day after day.
        </p>
        <FinalLink url="/resume" text="Check out my resume" />

      </section>
    );
  }
}

export default About;
