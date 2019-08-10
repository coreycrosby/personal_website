import React from 'react';
import $ from 'jquery';

const Landing = () => {

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 150 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

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
    <section className="Landing">
      <div className="Landing-left">
        <nav id="Landing-nav">
            <ul className="Pages">
              
                <li><a href="#Profile"><i class="far fa-user Profile-click"></i><b>Profile</b></a></li>
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
      </div>
      <div className="Landing-right">
        <div className="animate seven glow">
			<span>C</span><span>O</span><span>R</span><span>E</span><span>Y</span> &nbsp;
			<span>C</span><span>R</span><span>O</span><span>S</span><span>B</span><span>Y</span>
      </div>
      <div className="Landing-title-tag">
        <h3>Web Developer</h3>
      </div>
      <div className="Landing-typing">
          <h2>I'm 
            <span 
            class="txt-rotate"
            data-period="2000"
            data-rotate='[" a front-end specialist.", " based in Toronto.", " available for freelance projects.", " a sports enthusiast.", " a fashion icon."]'></span>
            </h2>
        </div>
      </div>
    </section>
    
  );
}

export default Landing;