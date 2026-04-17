const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Ju lutem shkruani një detyrë!");
        return;
        }

    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Fshij</button>
    `;

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.onclick = function() {
        li.remove();
    };

    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
