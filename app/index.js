import "jquery";
import "toastr";

const Toaster = require("toastr");

import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", function(){
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  var d = new Date();
  var dayName = days[d.getDay()];

  let el = document.querySelector("#happy");
  el.textContent = `${dayName}!`;

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
});
