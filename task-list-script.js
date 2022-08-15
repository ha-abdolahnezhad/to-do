//----task list----
//search bar
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
// load data
const tasks = JSON.parse(localStorage.getItem('task') || '[]');
const list = document.querySelector(".list");
tasks.forEach(element => {
    const li = document.createElement("li");
    li.classList.add('list-item');
    li.innerHTML = `<div class="edit-block">
                        <a href="task-list.html">
                            <img class="edit" src="./assets/edit.png" alt="">
                        </a>
                    </div>
                    <div class="content-block">
                        <span class="bold">${element.title}</span>
                        <span>${element.description}</span>
                    </div>
                    <div class="circle ${element.type}"></div>
                    <div class="delete-block">
                        <img class="trash" src="./assets/trash.png" alt="">
                    </div>`;
    list.appendChild(li);
});

//hover list items
listItem = document.querySelectorAll(".list-item");
editElement = document.querySelectorAll(".edit-block");
circleElement = document.querySelectorAll(".circle");
trashIcon = document.querySelectorAll(".trash");
listItem.forEach(function(element, index) {
    trashIcon[index].style.display = "none";
    element.addEventListener("mouseenter", function() {
        editElement[index].style.display = "none";
        circleElement[index].style.display = "none";
        trashIcon[index].style.display = "initial";
        element.classList.remove("list-item");
        element.classList.add("item-selected");
    });
    element.addEventListener("mouseleave", function() {
        editElement[index].style.display = "initial";
        circleElement[index].style.display = "initial";
        trashIcon[index].style.display = "none";
        element.classList.remove("item-selected");
        element.classList.add("list-item");
    });
});



