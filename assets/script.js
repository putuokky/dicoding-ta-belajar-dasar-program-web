// console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
// alert("Hello Browser!")

document.getElementsByClassName("toggle-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
  document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
  document.getElementsByClassName("menu")[0].classList.toggle('open')
}

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}