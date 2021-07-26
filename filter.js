let sels = document.querySelectorAll('.sel');
let mainsel = document.getElementById('drop2');
let books = document.querySelectorAll('.bookitem');
for (let sel of sels) {
    sel.onclick = function () {
        mainsel.textContent = sel.textContent
        for (let book of books) {
            if (sel.textContent !== book.dataset.topic && sel.textContent !== "All books") {
                book.style.display = "none";
            } else {
                book.style.display = "grid";
            }
        }

    }
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