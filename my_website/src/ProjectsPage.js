import React from 'react';

const Projects = () => {
  return (
    <section id="Projects">
      <div className="Projects-left">
        <div className="Project-title">
          <h1>Projects</h1>
        </div>
        <nav className="Project-nav">
            <ul>
                <li><a className="underlined-white"href="#Profile">Profile</a></li>
                <li><a className="underlined-white"href="#Skills">Skills</a></li>
                <li><a className="underlined-white"href="#Projects">Projects</a></li>
                <li><a className="underlined-white"href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="Projects-right">
      </div>
    </section>
    
  );
}

export default Projects;