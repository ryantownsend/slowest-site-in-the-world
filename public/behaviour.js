(function(d) {
  var tag = d.createElement("script");
  tag.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  tag.onload = function() {
    console.log("jQuery loaded");
  }
  d.head.appendChild(tag);
})(document)
