import "jquery";

const Toaster = require("toastr");

import "../scss/main.scss";

class Farwell {
  constructor() {
    this.days     = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    this.day      = new Date();
    this.selector = '#happy';
    this.element  = document.querySelector(this.selector);
  }

  say() {
    if (!this.element) {
      throw new Error(`Cannot find element with selector: ${this.selector}`);
    }

    const name = this.getNameOfDay();

    if (name) {
      this.element.textContent = `${name}!`;
    }
    else {
      console.error('Unable to say a proper goodbye. 😕');
    }
  }

  getNameOfDay() {
    return this.days[this.day.getDay()];
  }
}


$("#story").click(function() {
    $('html, body').animate({
        scrollTop: $(".story").offset().top
    }, 2000);
});

$("#projects, #to-projects-from-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 2000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});

$("#project-kso").click(function(evt) {
  evt.preventDefault();

  Toaster.info(
    `Thanks for your interest in the Kalanso app. I'm working on getting a demo online!`
  );
});



const farewell = new Farwell();
farewell.say();
