function myFunction() {
  var x = document.getElementById("myHome");
  if (x.className === "home") {
    x.className += " responsive";
  } else {
    x.className = "home";
  }
}