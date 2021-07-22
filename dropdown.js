/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let imgae = document.querySelector('.dropimg');

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
let arrow = document.querySelector('.arrow');
window.onscroll = function () {
  if (window.pageYOffset > 300) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block"
  };
}
let uparrow = document.querySelector('.uparrow');
window.onscroll = function () {
  if (window.pageYOffset < 300) {
    uparrow.style.display = "none";
  } else {
    uparrow.style.display = "block"
    }
  };
uparrow.onclick = function () {
  window.scrollTo(0, 0);
};