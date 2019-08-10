import React from 'react';
import Headshot from './headshot.jpg';
import $ from 'jquery';

const Profile = () => {

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
    <section id="Profile">
      <div className="Profile-left">
        <div className="Profile-title">
          <h1>Profile</h1>
        </div>
        <nav className="Profile-nav">
            <ul>
                <li><a className="underlined-white"href="#Profile">Profile</a></li>
                <li><a className="underlined-white"href="#Skills">Skills</a></li>
                <li><a className="underlined-white"href="#Projects">Projects</a></li>
                <li><a className="underlined-white"href="#Contact">Contact</a></li>
            </ul>
        </nav>
        </div>
        <div className="Profile-right">
        <img src={Headshot} alt="headshot of Corey Crosby" />
          <div className="Profile-info">
            <h1 className="Profile-about">About me</h1>
            <p>Full-stack web developer and sports enthusiast who enjoys the importance of teamwork in a goal oriented environment. Inspired by visual aesthetics and driven to create intuitive design and function while maintaining clean code. I am a creative-minded, solutions-driven developer that is motivated to bring ideas to life through the screens we stare at regularly.  </p>
          </div>
        </div>
    </section>
    
  );
}

export default Profile;