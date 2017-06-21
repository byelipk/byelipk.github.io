import "jquery";
import "toastr";

const Toaster = require("toastr");

console.log(Toaster);

import "../scss/main.scss";

import Typed from "./typed.js";

document.addEventListener("DOMContentLoaded", function(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];

  Typed.new(".contact h1", {
    strings: [
      "Looking for a frontend engineer?^1000",
      "That's great!<br> I'm looking for a job. :) ^1000",
      "Let's get in touch.^1000",
      "Email me at:<br> <strong><a href='mailto:byelipk@gmail.com'>byelipk@gmail.com</a></strong>^3000<br><small>Just click the link</small>^8000",
      `Have a great ${dayName}!^5000`
    ],
    typeSpeed: 50,
    loop: true
  });

  $("#story").click(function() {
      $('html, body').animate({
          scrollTop: $(".story").offset().top
      }, 2000);
  });

  $("#projects").click(function() {
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
});
