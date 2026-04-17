const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Ju lutem shkruani një detyrë!");
        return;
    }

    createTaskElement(taskText);
    saveTaskToLocal(taskText);
    
    taskInput.value = "";
}

function createTaskElement(text) {
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <div class="actions">
            <button class="complete-btn">Done</button>
            <button class="delete-btn">Fshij</button>
        </div>
    `;

    li.querySelector('.complete-btn').onclick = function() {
        li.querySelector('.task-text').classList.toggle('completed');
    };

    li.querySelector('.delete-btn').onclick = function() {
        li.remove();
        removeTaskFromLocal(text);
    };

    taskList.appendChild(li);
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function saveTaskToLocal(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(task => createTaskElement(task));
}

function removeTaskFromLocal(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
