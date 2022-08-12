//----task list----
const btnBack = document.querySelector(".btn-back");
const btnClose = document.querySelector(".btn-close");
const btnSearch = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-input");

btnBack.style.display = "initial";
searchInput.style.display = "none";
btnClose.style.display = "none";

btnSearch.addEventListener("click", function() {
    btnBack.style.display = "none";
    searchInput.style.display = "initial";
    btnClose.style.display = "initial";
});

btnClose.addEventListener("click", function() {
    btnBack.style.display = "initial";
    searchInput.style.display = "none";
    btnClose.style.display = "none";
});