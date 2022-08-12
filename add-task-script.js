//---- add task ----
const btnAdd = document.querySelector('.add-btn');
let type = "";
function setType(element) {
    type = element.value;
}
btnAdd.addEventListener("click", function(){
    let taskAddObj = {};
    taskAddObj.title = document.querySelector(".task-title").value;
    taskAddObj.date = document.querySelector(".task-date").value;
    taskAddObj.time = document.querySelector(".task-time").value;
    taskAddObj.type = type;
    /*radioBtns.forEach(function(element) {
        if(element.checked) {
            taskAddObj.type = element.value;
        }
    });*/

    taskAddObj.description = document.querySelector(".task-description").value;
    
    console.log(taskAddObj);

    const taskArr = JSON.parse(localStorage.getItem('task') || '[]');
    taskArr.push(taskAddObj);
    localStorage.setItem('task', JSON.stringify(taskArr));
});