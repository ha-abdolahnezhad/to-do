//----- home ----
//get data from storage
const tasks = JSON.parse(localStorage.getItem('task') || '[]');
// console.log(tasks);
// select html elements
const totalTasks = document.querySelector(".total");
const leftTasks = document.querySelector(".left");
const workTasks = document.querySelector(".work-tasks");
const personalTasks = document.querySelector(".personal-tasks");
const shoppingTasks = document.querySelector(".shopping-tasks");
const healthTasks = document.querySelector(".health-tasks");
const otherTasks = document.querySelector(".other-tasks");
const todayTasks = document.querySelector(".today");
//get date and time
let today = new Date().toISOString().slice(0, 10);
//console.log(today);


//times
const times = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

let tasksCount = {
    work: 0,
    personal: 0,
    shopping: 0,
    health: 0,
    other: 0,
    dayCount: 0,
    leftTasks: 0
};
const count = tasks.reduce(function(obj , item) {
    obj[item.type]++;
    if(item.date === today) obj.dayCount++;
    if(new Date(item.date) < new Date(today)) obj.leftTasks++;
    return obj;
}, tasksCount);


console.log(count);
tasks.filter(function(task) {
    
})
//show tasks
totalTasks.innerText = tasks.length;
leftTasks.innerText = tasks.leftTasks;
workTasks.innerText = `${tasksCount.work} tasks`;
personalTasks.innerText = `${tasksCount.personal} tasks`;
shoppingTasks.innerText = `${tasksCount.shopping} tasks`;
healthTasks.innerText = `${tasksCount.health} tasks`;
otherTasks.innerText = `${tasksCount.other} tasks`;
todayTasks.innerText = `Today you have ${tasksCount.dayCount} tasks`;
//append card to time list
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


