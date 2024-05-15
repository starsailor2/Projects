// script.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;
    
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.className = 'done-btn';
    doneBtn.onclick = function() {
        li.classList.toggle('done');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = '';
}
