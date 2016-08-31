"use strict";

var startup = function () {

  var button = $("button");
  var p = $("p");
	button.on("click", function () {
	  p.toggle();
	  if (button.text() === "X") {
		  var butText = "(?)";
	  }
	  else {
	    var butText = "X";
	  }
	 button.text(butText);
	});

  $("a[href^='#']").on("click", function () {
    var href = $(this).attr("href");
    var targetElem = $(href);
    targetElem[0].scrollIntoView({
      behavior: "smooth"
    });
    return false;
  });

};


$(document).ready(startup);