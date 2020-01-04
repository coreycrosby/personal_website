import React from 'react';
import $ from 'jquery';

const Contact = () => {

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1000);
});

  return (
    <section id="Contact">
      <div className="Contact-left">
        <div className="Contact-title">
          <h1>Contact</h1>
        </div>
        <nav className="Contact-nav">
            <ul>
                <li><a className="underlined-white"href="#Profile">Profile</a></li>
                <li><a className="underlined-white"href="#Skills">Skills</a></li>
                <li><a className="underlined-white"href="#Projects">Projects</a></li>
                <li><a className="underlined-white"href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="Contact-right">
        <div className="Contact-paragraph default">
          <p><span className="hvr-buzz-out">If</span> <span className="hvr-buzz-out">you</span> <span className="hvr-buzz-out">want</span> <span className="hvr-buzz-out">to</span> <span className="hvr-buzz-out">collaborate</span> <span className="hvr-buzz-out">on</span> <span className="hvr-buzz-out">bringing</span> <span className="hvr-buzz-out">ideas</span> <span className="hvr-buzz-out">to</span> <span className="hvr-buzz-out">life</span> – you are very welcome to contact me. 
            <br/>
            <br/>
            I am available for full-time employment and freelance projects.
            <br/>
            <br/>
            <h2 className="Contact-name">Corey Crosby</h2>
            <br/>
            Front-end web developer/designer
            <br/>
            <a className="Contact-email" href="mailto: corey.c.crosby@gmail.com">corey.c.crosby@gmail.com</a>
            <br />
            (647) 996 8674
            <br/>
            <br/>
            <br/>
              <a className="Contact-Linkedin-icon"href="https://www.linkedin.com/in/corey-crosby-8aa5b0188/" target="_blank"><i class="fab fa-linkedin hvr-grow"></i></a>
              <a className="Contact-Github-icon"href="https://github.com/coreycrosby" target="_blank"><i class="fab fa-github hvr-grow"></i></a>
            </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;