import React from 'react';

const Contact = () => {
  return (
    <section className="Contact">
        <div className="Contact-title">
          <h1>Contact</h1>
        </div>
        <form className="Contact-name">
          <p>If you want to collaborate on bringing ideas to life – you are very welcome to contact me. 
            <br/>
            <br/>
            I am available for full-time employment and freelance projects.</p>
        </form>
        <nav className="Contact-nav">
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

export default Contact;