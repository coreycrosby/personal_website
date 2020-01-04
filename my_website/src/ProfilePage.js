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
          <div className="Profile-info default">
            <h1 className="Profile-about">About me</h1>
            <p>An ambitious sports enthusiast and new graduate in Business Technology Management interested in exploring design, digital marketing, front end development and content creation. Inspired by visual aesthetics and driven to create intuitive design along with 5 years of customer service experience within the retail industry. A determined leader who is dedicated to continuously learn and develop professionally.   </p>
            <br/>
            <p>
            Connect with me on
              <a className="Skills-resume" href= "https://www.linkedin.com/in/corey-crosby-8aa5b0188/" target="_blank"> Linkedin </a>
              .
            </p>
          </div>
        </div>
    </section>
    
  );
}

export default Profile;