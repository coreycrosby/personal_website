import React from 'react';
import Pdf from './Resume.pdf';
import $ from 'jquery';

const Skills = () => {

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
    <section id="Skills">
      <div className="Skills-left">
        <div className="Skills-title">
          <h1>Skills</h1>
        </div>
        <nav className="Skills-nav">
            <ul>
                <li><a className="underlined-white"href="#Profile">Profile</a></li>
                <li><a className="underlined-white"href="#Skills">Skills</a></li>
                <li><a className="underlined-white"href="#Projects">Projects</a></li>
                <li><a className="underlined-white"href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="Skills-right">
        <div className="Skills-info default">
          <p>My main area of expertise is front-end development. (client side of the web).
              <br />
              <br />
              HTML, CSS, Javascript, building web apps with React.js, animations, features and coding interactive and intuitive layouts.
              <br />
              <br />
              I also have experience creating logos, editing photos and videos using graphics editing software such as Adobe Illustrator, Photoshop and Premiere Pro.
              <br />
              <br />
        <div className="Skills-link-github">
        <a href={Pdf} class="button" target="_blank">VIEW RESUME</a>
        </div>
          </p>
              <br/>
              <br/>
              <br/>
              <br/>
        </div>
        <div className="Skills-right-container">
                <li><a className="HTML-icon"><i class="fab fa-html5"></i><p>HTML5</p></a></li>
                <li><a className="CSS-icon"><i class="fab fa-css3-alt"></i><p>CSS3</p></a></li>
                <li><a className="Javascript-icon"><i class="fab fa-js-square"></i><p>Javascript</p></a></li>
                <li><a className="React-icon"><i class="fab fa-react"></i><p>React</p></a></li>
                <li><a className="VS-icon"><i class="fas fa-file-code"></i><p>Visual Studio Code</p></a></li>
                <li><a className="Git-icon"><i class="fab fa-github1"></i><p>Git & Github</p></a></li>
                <li><a className="Illustrator-icon"><i class="fab fa-adobe1"></i><p>Adobe Illustrator</p></a></li>
                <li><a className="Photoshop-icon"><i class="fab fa-adobe2"></i><p>Adobe Photoshop</p></a></li>
                <li><a className="Premiere-icon"><i class="fab fa-adobe3"></i><p>Adobe Premiere Pro</p></a></li>
                <li><a className="Word-icon"><i class="fab fa-microsoft"></i><p>Microsoft Word</p></a></li>
                <li><a className="Excel-icon"><i class="fab fa-microsoft1"></i><p>Microsoft Excel</p></a></li>
                <li><a className="Powerpoint-icon"><i class="fab fa-microsoft2"></i><p>Microsoft Powerpoint</p></a></li>
        </div>
      </div>
    </section>
  );
}

export default Skills;