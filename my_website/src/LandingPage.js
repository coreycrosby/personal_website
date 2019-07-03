import React from 'react';

const Landing = () => {
  return (
    <section className="Landing">
        <div className="Landing-title">
          <h2>Full-Stack Web Developer & Front-End Specialist</h2>
        </div>
        <div className="Landing-name">
          <h1>Corey <br/>
          Crosby</h1>
        </div>
        <nav className="Landing-nav">
            <ul>
                <li><a className="underlined-white"href="Home">Home</a></li>
                <li><a className="underlined-white"href="Profile">Profile</a></li>
                <li><a className="underlined-white"href="Skills">Skills</a></li>
                <li><a className="underlined-white"href="Projects">Projects</a></li>
                <li><a className="underlined-white"href="Contact">Contact</a></li>
            </ul>
        </nav>
    </section>
    
  );
}

export default Landing;