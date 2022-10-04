// button hamburger menu
document.getElementsByClassName("toggle-navbar")[0].addEventListener("click", toogleClass);
function toogleClass() {
  document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
  document.getElementsByClassName("menu")[0].classList.toggle('open')
}
// end button hamburger menu

// menu dropdown mobile
function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// end menu dropdown mobile
