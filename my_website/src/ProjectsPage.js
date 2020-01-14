import React from 'react';
import Fridgenerate from './fridgenerate.jpg';
import Holy_Grails from './holygrails.jpg';
import Photoshop from './photoshop.jpg';
import Illustrator from './torontologo.jpg';
import $ from 'jquery';

const Projects = () => {

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
    <section id="Projects">
      <div className="Projects-left">
        <div className="Project-title">
          <h1>Projects</h1>
        </div>
        <nav className="Project-list-nav">
            <ul>
                <li><a className="my-projects"href="http://fridgenerate.herokuapp.com/" target="_blank">Fridgenerate</a></li>
                <li><a className="my-projects"href="https://coreycrosby.wixsite.com/holygrails" target="_blank">Holy Grails</a></li>
                <br/>
                <li><a className="my-projects"href={Photoshop} target="_blank">Views Album Cover (Photoshop)</a></li>
                <li><a className="my-projects"href={Illustrator} target="_blank">Toronto Logo (Illustrator)</a></li>
            </ul>
        </nav>
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
      <a href="http://fridgenerate.herokuapp.com/" target="_blank"><img src={Fridgenerate} alt="screenshot of Fridgenerate project" /></a>
      <a href="https://coreycrosby.wixsite.com/holygrails" target="_blank"><img src={Holy_Grails} alt="Holy Grails Landing page" /></a>
      <a href={Photoshop} target="_blank"><img src={Photoshop}alt="Photoshop Picture" /> </a>
      <a href={Illustrator} target="_blank"><img src={Illustrator}alt="Illustrator Logo" /> </a>
      </div>
    </section>
  );
}

export default Projects;