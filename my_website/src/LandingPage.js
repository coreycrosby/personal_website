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
                <li><a className="Profile-icon"href="#Profile"><i class="far fa-user"></i></a></li>
                <li><a className="Skills-icon"href="#Skills"><i class="fas fa-code"></i></a></li>
                <li><a className="Projects-icon"href="#Projects"><i class="fas fa-eye"></i></a></li>
                <li><a className="Contact-icon"href="#Contact"><i class="far fa-address-card"></i></a></li>
                <li><a className="Email-icon"href="mailto: corey.c.crosby@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></li>
                <li><a className="Linkedin-icon"href="https://www.linkedin.com/in/corey-crosby-8aa5b0188/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a className="Github-icon"href="https://github.com/coreycrosby" target="_blank"><i class="fab fa-github"></i></a></li>
            </ul>
        </nav>
    </section>
    
  );
}

export default Landing;