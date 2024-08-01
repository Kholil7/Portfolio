function appearBtn (){
    const btnAbout = document.getElementById('btnAbout');
    const internship = document.getElementById('internship');
    const skillCan = document.getElementById('skillCan');
    const contact = document.getElementById('contact');

    btnAbout.style.display = 'block';
    internship.style.display = 'none';
    skillCan.style.display = 'none';
    contact.style.display = 'none';

}

function appearIntern (){
    const btnAbout = document.getElementById('btnAbout');
    const internship = document.getElementById('internship');
    const skillCan = document.getElementById('skillCan');
    const contact = document.getElementById('contact');

    internship.style.display = 'block';
    btnAbout.style.display = 'none';
    skillCan.style.display = 'none';
    contact.style.display = 'none';

}

function appearSkill (){
    const btnAbout = document.getElementById('btnAbout');    const internship = document.getElementById('internship');
    const skillCan = document.getElementById('skillCan');
    const contact = document.getElementById('contact');

    skillCan.style.display = 'block';
    internship.style.display = 'none';
    btnAbout.style.display = 'none';
    contact.style.display = 'none';

}

function appearContact (){
  const btnAbout = document.getElementById('btnAbout');    const internship = document.getElementById('internship');
  const skillCan = document.getElementById('skillCan');
  const contact = document.getElementById('contact');

  skillCan.style.display = 'none';
  internship.style.display = 'none';
  btnAbout.style.display = 'none';
  contact.style.display = 'flex';

}

// bagian name

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

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
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.04em solid #000}";
    document.body.appendChild(css);
};