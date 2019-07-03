import React from 'react';

const Profile = () => {
  return (
    <section className="Profile">
        <div className="Profile-title">
          <h1>Profile</h1>
        </div>
        <div className="Profile-info">
          <h3>Full-stack web developer and sports enthusiast who enjoys the importance of teamwork in a goal oriented environment. Inspired by visual aesthetics and driven to create intuitive design and function while maintaining clean code. I am a creative-minded, solutions-driven developer that is motivated to bring ideas to life through the screens we stare at regularly.  </h3>
        </div>
        <nav className="Profile-nav">
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </section>
    
  );
}

export default Profile;