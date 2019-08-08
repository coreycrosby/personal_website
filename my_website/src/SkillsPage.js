import React from 'react';

const Skills = () => {
  return (
    <section id="Skills">
      <div className="Skills-left">
        <div className="Skills-title">
          <h1>Skills</h1>
        </div>
        <nav className="Skills-nav">
            <ul>
                <li><a className="underlined-white"href="#Profile">Profile</a></li>
                <li><a className="underlined-white"href="#Skills">Skills</a></li>
                <li><a className="underlined-white"href="#Projects">Projects</a></li>
                <li><a className="underlined-white"href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="Skills-right">
        <div className="Skills-info">
          <p>My main area of expertise is front-end development (client side of the web).
              <br />
              <br />
              HTML, CSS, Javascript, building web apps with React.js, animations, features and coding interactive layouts.
              <br />
              <br />
              I also have full-stack developer experience building web apps with Python and Django.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="Skills-link-github">
        <a href="https://github.com/coreycrosby/personal_website" class="button" target="_blank">VIEW PROJECT ON GITHUB</a>
        </div>
      </div>
    </section>
  );
}

export default Skills;