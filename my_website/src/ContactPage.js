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
        <form className="Contact-name">
          <p>If you want to collaborate on bringing ideas to life – you are very welcome to contact me. 
            <br/>
            <br/>
            I am available for full-time employment and freelance projects.</p>
        </form>
      </div>
        
    </section>
    
  );
}

export default Contact;