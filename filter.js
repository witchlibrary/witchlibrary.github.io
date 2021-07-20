let sels = document.querySelectorAll('.sel');
let mainsel = document.querySelector('.dropbtn');
let books = document.querySelectorAll('.book');
for (let sel of sels) {
    sel.onclick = function () {
        mainsel.textContent = sel.textContent
        for (let book of books) {
if (sel.textContent !== book.dataset.topic && sel.textContent !== "All books") {
book.style.display = "none";
} else {
    book.style.display = "block";
}
        }
        
    }
}