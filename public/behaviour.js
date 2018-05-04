(function(d) {
  var tag = d.createElement("script");
  tag.src = "http://code.jquery.com/jquery-3.3.1.min.js";
  tag.onload = function() {
    console.log("jQuery loaded");
  }
  d.head.appendChild(tag);
})(document)
