//----- home ----
const tasks = JSON.parse(localStorage.getItem('task') || '[]');
// console.log(tasks);
const totalTasks = document.querySelector(".total");
const leftTasks = document.querySelector(".left");
const workTasks = document.querySelector(".work-tasks");
const personalTasks = document.querySelector(".personal-tasks");
const shoppingTasks = document.querySelector(".shopping-tasks");
const healthTasks = document.querySelector(".health-tasks");
const todayTasks = document.querySelector(".today");

let today = new Date();
//console.log(today);
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
// console.log(today);

const tasksCount = 
{
    work : 0,
    personal : 0,
    shopping : 0,
    health : 0,
    other : 0,
    dayCount: 0,
}

const times = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

tasks.filter(function(task) {
    if(task.type === "work"){
        tasksCount.work++;
    }
});
tasks.filter(function(task) {
    if(task.type === "personal"){
        tasksCount.personal++;
    }
});
tasks.filter(function(task) {
    if(task.type === "shopping"){
        tasksCount.shopping++;
    }
});
tasks.filter(function(task) {
    if(task.type === "health"){
        tasksCount.health++;
    }
});
tasks.filter(function(task) {
    if(task.date === today){
        tasksCount.dayCount++;
    }
});

totalTasks.innerText = tasks.length;
workTasks.innerText = `${tasksCount.work} tasks`;
personalTasks.innerText = `${tasksCount.personal} tasks`;
shoppingTasks.innerText = `${tasksCount.shopping} tasks`;
healthTasks.innerText = `${tasksCount.health} tasks`;
todayTasks.innerText = `Today you have ${tasksCount.dayCount} tasks`;

const timeBox = document.querySelector(".list");
for(let i = 0; i < 24; i++) {
    const li = document.createElement("li");
    const currentTask = tasks.find(item => item.time === times[i]);
    li.innerHTML = `${currentTask ?`<div>
                                        <spaan class="show-time">${times[i]}</span>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <span class="bold">${currentTask.title}</span>
                                            <span>${currentTask.description}</span>
                                        </div>
                                        <div class="card-circle ${currentTask.type}"></div>`:`
                                        <div>
                                            <spaan class="show-time">${times[i]}</span>
                                        </div>`}
                                    </div>
                                    `;
    timeBox.appendChild(li);
}


