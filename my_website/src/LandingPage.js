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
        <nav id="Landing-nav">
            <ul className="Pages">
              
                <li><a href="#Profile"><i class="far fa-user"></i><b>Profile</b></a></li>
                <li><a href="#Skills"><i class="fas fa-code"></i><b>Skills</b></a></li>
                <li><a href="#Projects"><i class="fas fa-eye"></i><b>Projects</b></a></li>
                <li><a href="#Contact"><i class="far fa-address-card"></i><b>Contact</b></a></li>
            </ul>
            <ul className="Social-media">
                <li><a className="Linkedin-icon"href="https://www.linkedin.com/in/corey-crosby-8aa5b0188/" target="_blank"><i class="fab fa-linkedin hvr-grow"></i></a></li>
                <li><a className="Github-icon"href="https://github.com/coreycrosby" target="_blank"><i class="fab fa-github hvr-grow"></i></a></li>
                <li><a className="Email-icon"href="mailto: corey.c.crosby@gmail.com" target="_blank"><i class="far fa-envelope hvr-grow"></i></a></li>
            </ul>
        </nav>
    </section>
    
  );
}

export default Landing;