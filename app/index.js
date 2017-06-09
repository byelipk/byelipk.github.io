import "jquery";
import "tether";
import "bootstrap";

import "../scss/main.scss";

import Typed from "./typed.js";

document.addEventListener("DOMContentLoaded", function(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];

  Typed.new(".thanks h1", {
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
});
